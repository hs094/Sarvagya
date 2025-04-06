// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    pathname: '/',
    query: {},
  })),
  usePathname: jest.fn(() => '/'),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  useParams: jest.fn(() => ({})),
}));

// Mock next/headers
jest.mock('next/headers', () => ({
  cookies: jest.fn(() => ({
    getAll: jest.fn(() => []),
    get: jest.fn(() => null),
    set: jest.fn(),
  })),
  headers: jest.fn(() => ({
    get: jest.fn(),
    getAll: jest.fn(() => []),
  })),
}));

// Mock Stream Video SDK
jest.mock('@stream-io/video-react-sdk', () => ({
  useStreamVideoClient: jest.fn(() => null),
  Call: jest.fn(),
}));

// Mock Stream Chat SDK
jest.mock('stream-chat-react', () => ({
  Channel: jest.fn(({ children }) => children),
  ChannelList: jest.fn(() => null),
  Chat: jest.fn(({ children }) => children),
  MessageInput: jest.fn(() => null),
  MessageList: jest.fn(() => null),
  Window: jest.fn(() => null),
}));

// Mock Supabase
jest.mock('@supabase/ssr', () => ({
  createBrowserClient: jest.fn(() => ({
    auth: {
      signUp: jest.fn(),
      signInWithPassword: jest.fn(),
      signOut: jest.fn(),
      getUser: jest.fn(),
    },
    storage: {
      from: jest.fn(() => ({
        upload: jest.fn(),
      })),
    },
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn(),
        })),
      })),
      insert: jest.fn(),
    })),
  })),
  createServerClient: jest.fn(() => ({
    auth: {
      signUp: jest.fn(),
      signInWithPassword: jest.fn(),
      signOut: jest.fn(),
      getUser: jest.fn(),
    },
    storage: {
      from: jest.fn(() => ({
        upload: jest.fn(),
      })),
    },
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn(),
        })),
      })),
      insert: jest.fn(),
    })),
  })),
}));
