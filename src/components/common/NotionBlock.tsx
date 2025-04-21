import React from 'react';
import { cn } from '@/lib/utils';

interface NotionBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function NotionBlock({ children, className }: NotionBlockProps) {
  return (
    <div className={cn("notion-block", className)}>
      {children}
    </div>
  );
}

export function NotionPage({ children, className }: NotionBlockProps) {
  return (
    <div className={cn("notion-page", className)}>
      {children}
    </div>
  );
}

export function NotionCard({ children, className }: NotionBlockProps) {
  return (
    <div className={cn("notion-card", className)}>
      {children}
    </div>
  );
}

export function NotionHeading({ children, className }: NotionBlockProps) {
  return (
    <h1 className={cn("text-3xl font-bold text-gray-800 my-4", className)}>
      {children}
    </h1>
  );
}

export function NotionSubheading({ children, className }: NotionBlockProps) {
  return (
    <h2 className={cn("text-xl font-semibold text-gray-700 my-3", className)}>
      {children}
    </h2>
  );
}

export function NotionText({ children, className }: NotionBlockProps) {
  return (
    <p className={cn("text-gray-700 my-2", className)}>
      {children}
    </p>
  );
}