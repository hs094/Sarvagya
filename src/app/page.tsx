import Link from 'next/link';
import { ROUTES } from '@/constants';
import { NotionPage, NotionHeading, NotionText, NotionCard, NotionSubheading } from '@/components/common/NotionBlock';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      <nav className="w-full px-8 py-4 flex items-center justify-between border-b border-gray-200 bg-white">
        <Link href="/" className="font-medium text-xl text-gray-800">Sarvagya</Link>
        <Link
          href="https://github.com/yourusername/sarvagya"
          target="_blank"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Source Code
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <NotionPage>
          <NotionHeading>
            Follow experts and join free mentorship programs
          </NotionHeading>

          <NotionText className="text-xl text-gray-500 mb-12">
            Learn from top experts in your field and grow your skills with free mentorship programs
          </NotionText>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <NotionCard className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-3">For Students</h3>
              <p className="text-gray-600 mb-6">
                Connect with instructors, join mentorship programs, and learn from experts in your field.
              </p>
              <div className="flex gap-3">
                <Link
                  href={ROUTES.STUDENT.AUTH.LOGIN}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href={ROUTES.STUDENT.AUTH.REGISTER}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  Register
                </Link>
              </div>
            </NotionCard>

            <NotionCard className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-3">For Instructors</h3>
              <p className="text-gray-600 mb-6">
                Share your knowledge, create announcements, and connect with students through chat and video calls.
              </p>
              <div className="flex gap-3">
                <Link
                  href={ROUTES.INSTRUCTOR.AUTH.LOGIN}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href={ROUTES.INSTRUCTOR.AUTH.REGISTER}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  Register
                </Link>
              </div>
            </NotionCard>
          </div>

          <div className="mt-16">
            <NotionSubheading>Features</NotionSubheading>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <NotionCard>
                <h4 className="font-medium mb-2">Real-time Chat</h4>
                <p className="text-gray-600">Connect with instructors and students through real-time messaging</p>
              </NotionCard>
              <NotionCard>
                <h4 className="font-medium mb-2">Video Calls</h4>
                <p className="text-gray-600">Schedule and join video calls for more interactive learning</p>
              </NotionCard>
              <NotionCard>
                <h4 className="font-medium mb-2">Announcements</h4>
                <p className="text-gray-600">Stay updated with the latest announcements from your instructors</p>
              </NotionCard>
            </div>
          </div>
        </NotionPage>
      </div>
    </div>
  );
}
