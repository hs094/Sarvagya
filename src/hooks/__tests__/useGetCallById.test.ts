import { renderHook, act } from '@testing-library/react';
import { useGetCallById } from '../useGetCallById';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';

// Mock the useStreamVideoClient hook
jest.mock('@stream-io/video-react-sdk', () => ({
  useStreamVideoClient: jest.fn(),
}));

describe('useGetCallById Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return initial state when client is not available', () => {
    // Mock the client as null
    (useStreamVideoClient as jest.Mock).mockReturnValue(null);

    // Render the hook
    const { result } = renderHook(() => useGetCallById('call-123'));

    // Check the initial state
    expect(result.current.call).toBeUndefined();
    expect(result.current.isCallLoading).toBe(true);
  });

  it('should fetch call data when client is available', async () => {
    // Mock call data
    const mockCall = { id: 'call-123', type: 'video' };
    
    // Mock the client and queryCalls method
    const mockClient = {
      queryCalls: jest.fn().mockResolvedValue({
        calls: [mockCall],
      }),
    };
    
    (useStreamVideoClient as jest.Mock).mockReturnValue(mockClient);

    // Render the hook
    const { result, waitForNextUpdate } = renderHook(() => useGetCallById('call-123'));

    // Wait for the async effect to complete
    await waitForNextUpdate();

    // Check that the client method was called correctly
    expect(mockClient.queryCalls).toHaveBeenCalledWith({
      filter_conditions: { id: 'call-123' },
    });

    // Check the updated state
    expect(result.current.call).toEqual(mockCall);
    expect(result.current.isCallLoading).toBe(false);
  });

  it('should handle empty call results', async () => {
    // Mock the client with empty calls array
    const mockClient = {
      queryCalls: jest.fn().mockResolvedValue({
        calls: [],
      }),
    };
    
    (useStreamVideoClient as jest.Mock).mockReturnValue(mockClient);

    // Render the hook
    const { result, waitForNextUpdate } = renderHook(() => useGetCallById('non-existent-call'));

    // Wait for the async effect to complete
    await waitForNextUpdate();

    // Check the updated state
    expect(result.current.call).toBeUndefined();
    expect(result.current.isCallLoading).toBe(false);
  });

  it('should handle errors during call fetching', async () => {
    // Mock the client with a rejected promise
    const mockClient = {
      queryCalls: jest.fn().mockRejectedValue(new Error('Failed to fetch call')),
    };
    
    // Mock console.error to prevent error output in tests
    const originalConsoleError = console.error;
    console.error = jest.fn();
    
    (useStreamVideoClient as jest.Mock).mockReturnValue(mockClient);

    // Render the hook
    const { result, waitForNextUpdate } = renderHook(() => useGetCallById('call-123'));

    // Wait for the async effect to complete
    await waitForNextUpdate();

    // Check that the error was logged
    expect(console.error).toHaveBeenCalled();

    // Check the updated state
    expect(result.current.call).toBeUndefined();
    expect(result.current.isCallLoading).toBe(false);

    // Restore console.error
    console.error = originalConsoleError;
  });
});
