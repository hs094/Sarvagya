# Sarvagya

Sarvagya is a platform that connects students with instructors, allowing for real-time communication through chat and video calls, as well as content sharing through announcements.

## Features

- Authentication for both students and instructors
- Student feed with announcements from followed instructors
- Instructor profiles with bio, occupation, and contact information
- Real-time chat using Stream Chat SDK
- Video calls using Stream Video SDK
- Announcement creation and management
- Follow/unfollow functionality

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Supabase](https://supabase.com/) - Open source Firebase alternative for authentication and database
- [Stream Chat SDK](https://getstream.io/chat/docs/sdk/react/) - Real-time chat functionality
- [Stream Video SDK](https://getstream.io/video/docs/react/) - Video call functionality
- [ShadCn UI](https://ui.shadcn.com/) - UI component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Jest](https://jestjs.io/) - Testing framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testing utilities

## Project Structure

```
src/
├── actions/         # Server actions for data mutations
├── app/             # Next.js app router pages and layouts
├── components/      # React components
│   ├── common/      # Shared components
│   ├── instructor/  # Instructor-specific components
│   ├── student/     # Student-specific components
│   └── ui/          # UI components from ShadCn
├── config/          # Configuration files
├── constants/       # Constants and enums
├── hooks/           # Custom React hooks
├── lib/             # Utility libraries
│   └── supabase/    # Supabase client utilities
├── tests/           # Test utilities and mocks
└── types/           # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Stream account (for chat and video)

### Installation

1. Clone the GitHub repository
2. Run `npm install` to install the project dependencies
3. Set up Supabase and copy the following credentials into the `.env.local` file
   ```env
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   NEXT_PUBLIC_SUPABASE_URL=
   STORAGE_URL=https://<supabase_url>/storage/v1/object/public/
   ```
4. Add your Stream keys into the file also:
   ```env
   NEXT_PUBLIC_STREAM_API_KEY=
   STREAM_SECRET_KEY=
   NEXT_PUBLIC_PAGE_URL=http://localhost:3000
   NEXT_PUBLIC_STREAM_CHANNEL_IMAGE_URL=https://api.dicebear.com/9.x/pixel-art/svg?seed=
   ```
5. Ensure you set up the Supabase tables and their access policies, and the Supabase storage (`headshots`) for the instructors.
6. Run `npm run dev` to start the local development server.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues
- `npm test` - Run Jest tests
- `npm run test:watch` - Run Jest tests in watch mode
- `npm run test:coverage` - Run Jest tests with coverage report

## Testing

The project uses Jest and React Testing Library for testing. Tests are organized in `__tests__` directories alongside the code they test.

- Unit tests for utility functions and hooks
- Component tests for UI components
- Integration tests for actions and API routes

Run tests with `npm test`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
