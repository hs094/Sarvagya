// API endpoints
export const API_ENDPOINTS = {
  SUPABASE_AUTH: '/auth',
  STREAM_CHAT: '/chat',
  STREAM_CALL: '/call',
};

// Route paths
export const ROUTES = {
  HOME: '/',
  STUDENT: {
    AUTH: {
      LOGIN: '/student/auth/login',
      REGISTER: '/student/auth/register',
    },
    FEED: '/student/feed',
  },
  INSTRUCTOR: {
    AUTH: {
      LOGIN: '/instructor/auth/login',
      REGISTER: '/instructor/auth/register',
    },
    DASHBOARD: '/instructor/dashboard',
    PROFILE: (id: string) => `/instructor/${id}`,
  },
  CHAT: (id: string) => `/chat/${id}`,
  CALL: (id: string) => `/call/${id}`,
  ERROR: '/error',
};

// Storage paths
export const STORAGE = {
  HEADSHOTS: 'headshots',
};

// Interests
export const INTERESTS = [
  'Technology',
  'Science',
  'Art',
  'Music',
  'Literature',
  'History',
  'Mathematics',
  'Philosophy',
  'Business',
  'Economics',
  'Psychology',
  'Health',
  'Fitness',
  'Cooking',
  'Travel',
];

// Toast messages
export const TOAST_MESSAGES = {
  SUCCESS: {
    LOGIN: 'Successfully logged in',
    REGISTER: 'Successfully registered',
    ANNOUNCEMENT: 'Announcement created successfully',
    CHANNEL: 'Channel created successfully',
    CALL: 'Call scheduled successfully',
    FOLLOW: 'Successfully followed instructor',
    UNFOLLOW: 'Successfully unfollowed instructor',
  },
  ERROR: {
    LOGIN: 'Failed to log in',
    REGISTER: 'Failed to register',
    ANNOUNCEMENT: 'Failed to create announcement',
    CHANNEL: 'Failed to create channel',
    CALL: 'Failed to schedule call',
    FOLLOW: 'Failed to follow instructor',
    UNFOLLOW: 'Failed to unfollow instructor',
    SESSION: 'No session found',
  },
};
