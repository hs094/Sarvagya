import { getUserSession } from '../auth';
import { createClient } from '@/lib/supabase/server';

// Mock the createClient function
jest.mock('@/lib/supabase/server', () => ({
  createClient: jest.fn(),
}));

describe('Auth Actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getUserSession', () => {
    it('should return user data when session exists', async () => {
      // Mock the Supabase client
      const mockUser = { id: 'user-123', email: 'test@example.com' };
      const mockSupabase = {
        auth: {
          getUser: jest.fn().mockResolvedValue({
            data: { user: mockUser },
            error: null,
          }),
        },
      };
      
      (createClient as jest.Mock).mockResolvedValue(mockSupabase);

      // Call the function
      const result = await getUserSession();

      // Assertions
      expect(createClient).toHaveBeenCalled();
      expect(mockSupabase.auth.getUser).toHaveBeenCalled();
      expect(result).toEqual({
        error: null,
        status: 200,
        user: mockUser,
      });
    });

    it('should return error when session retrieval fails', async () => {
      // Mock the Supabase client with an error
      const mockError = { message: 'Session error', status: 401 };
      const mockSupabase = {
        auth: {
          getUser: jest.fn().mockResolvedValue({
            data: null,
            error: mockError,
          }),
        },
      };
      
      (createClient as jest.Mock).mockResolvedValue(mockSupabase);

      // Call the function
      const result = await getUserSession();

      // Assertions
      expect(createClient).toHaveBeenCalled();
      expect(mockSupabase.auth.getUser).toHaveBeenCalled();
      expect(result).toEqual({
        error: mockError.message,
        status: mockError.status,
        user: null,
      });
    });

    it('should return error when no data is returned', async () => {
      // Mock the Supabase client with no data
      const mockSupabase = {
        auth: {
          getUser: jest.fn().mockResolvedValue({
            data: null,
            error: null,
          }),
        },
      };
      
      (createClient as jest.Mock).mockResolvedValue(mockSupabase);

      // Call the function
      const result = await getUserSession();

      // Assertions
      expect(createClient).toHaveBeenCalled();
      expect(mockSupabase.auth.getUser).toHaveBeenCalled();
      expect(result).toEqual({
        error: 'No session found',
        status: 404,
        user: null,
      });
    });
  });
});
