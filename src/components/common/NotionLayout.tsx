import React from 'react';
import Link from 'next/link';
import { User } from '@supabase/supabase-js';
import { ROUTES } from '@/constants';
import { logOut } from '../../../actions/auth';
import { cn } from '@/lib/utils';

interface NotionLayoutProps {
  children: React.ReactNode;
  user?: User | null;
  sidebar?: React.ReactNode;
  title?: string;
}

export function NotionLayout({ 
  children, 
  user, 
  sidebar,
  title = "Sarvagya"
}: NotionLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <div className="notion-sidebar">
        <div className="px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-medium text-gray-800">
            <span className="text-lg">{title}</span>
          </Link>
        </div>
        
        <div className="mt-6">
          {sidebar || (
            <div className="px-4 space-y-1">
              <Link 
                href={user?.user_metadata.isInstructor ? ROUTES.INSTRUCTOR.DASHBOARD : ROUTES.STUDENT.FEED}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-gray-700"
              >
                <span>Home</span>
              </Link>
              
              {user?.user_metadata.isInstructor && (
                <Link 
                  href={ROUTES.INSTRUCTOR.PROFILE(user.id)}
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-gray-700"
                >
                  <span>Profile</span>
                </Link>
              )}
              
              <Link 
                href="/chat"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-gray-700"
              >
                <span>Messages</span>
              </Link>
            </div>
          )}
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="h-12 border-b border-gray-200 flex items-center justify-between px-4">
          <div className="text-sm text-gray-500">
            {user ? `${user.user_metadata.name || user.email}` : 'Guest'}
          </div>
          
          <div className="flex items-center gap-2">
            {user && (
              <button 
                onClick={() => logOut()}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Log out
              </button>
            )}
          </div>
        </div>
        
        {/* Content area */}
        <div className="flex-1 overflow-auto">
          <div className="notion-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Add default export
export default NotionLayout;
