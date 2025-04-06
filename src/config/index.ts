// Environment variables
export const ENV = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  STORAGE_URL: process.env.STORAGE_URL,
  NEXT_PUBLIC_STREAM_API_KEY: process.env.NEXT_PUBLIC_STREAM_API_KEY,
  STREAM_SECRET_KEY: process.env.STREAM_SECRET_KEY,
  NEXT_PUBLIC_PAGE_URL: process.env.NEXT_PUBLIC_PAGE_URL,
  NEXT_PUBLIC_STREAM_CHANNEL_IMAGE_URL: process.env.NEXT_PUBLIC_STREAM_CHANNEL_IMAGE_URL,
};

// Supabase configuration
export const SUPABASE_CONFIG = {
  url: ENV.NEXT_PUBLIC_SUPABASE_URL,
  anonKey: ENV.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  storageUrl: ENV.STORAGE_URL,
};

// Stream configuration
export const STREAM_CONFIG = {
  apiKey: ENV.NEXT_PUBLIC_STREAM_API_KEY,
  secretKey: ENV.STREAM_SECRET_KEY,
  pageUrl: ENV.NEXT_PUBLIC_PAGE_URL,
  channelImageUrl: ENV.NEXT_PUBLIC_STREAM_CHANNEL_IMAGE_URL,
};

// App configuration
export const APP_CONFIG = {
  name: 'Sarvagya',
  description: 'A platform for students to connect with instructors',
  version: '0.1.0',
};
