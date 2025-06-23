import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Giyathverse | Lawal Giyath Portfolio',
  description: "Welcome to the creative universe of Lawal Giyath. A portfolio showcasing design, development, and innovation.",
  icons: {
    icon: 'https://i.postimg.cc/hvyvwFGm/Logo-for-G-Tech-Startup-Aesthetic-removebg-preview.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} !scroll-smooth`}>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
