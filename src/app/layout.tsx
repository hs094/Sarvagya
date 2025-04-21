import type { Metadata } from "next";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarvagya - Knowledge Sharing Platform",
  description: "Connect with instructors and learn through mentorship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fbfbfa]">
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
