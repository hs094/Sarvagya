import { Feed, InstructorProps, UserData } from '@/types';

// Mock user data
export const mockUser: UserData = {
  id: 'user-123',
  name: 'Test User',
  email: 'test@example.com',
  image: 'https://example.com/image.jpg',
};

// Mock instructor data
export const mockInstructor: InstructorProps = {
  id: 'instructor-123',
  name: 'Test Instructor',
  email: 'instructor@example.com',
  image: 'https://example.com/instructor.jpg',
  bio: 'This is a test instructor bio',
  occupation: 'Test Occupation',
  url: 'https://example.com',
  followers: ['user-123', 'user-456'],
};

// Mock feed data
export const mockFeed: Feed = {
  id: 1,
  author_id: 'instructor-123',
  author_name: 'Test Instructor',
  author_image: 'https://example.com/instructor.jpg',
  author_title: 'Test Occupation',
  content: 'This is a test announcement',
  created_at: new Date().toISOString(),
  interest: 'Technology',
  likes: ['user-123'],
};

// Mock feeds array
export const mockFeeds: Feed[] = [
  mockFeed,
  {
    ...mockFeed,
    id: 2,
    content: 'Another test announcement',
    created_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
  },
];

// Mock instructors array
export const mockInstructors: InstructorProps[] = [
  mockInstructor,
  {
    ...mockInstructor,
    id: 'instructor-456',
    name: 'Another Instructor',
    email: 'another@example.com',
    occupation: 'Another Occupation',
    followers: ['user-789'],
  },
];
