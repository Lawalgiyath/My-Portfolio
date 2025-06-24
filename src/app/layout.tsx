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
    shortcut: 'https://i.postimg.cc/hvyvwFGm/Logo-for-G-Tech-Startup-Aesthetic-removebg-preview.png',
    apple: 'https://i.postimg.cc/hvyvwFGm/Logo-for-G-Tech-Startup-Aesthetic-removebg-preview.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} !scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/app/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/app/favicon.svg" />
        <link rel="shortcut icon" href="/app/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/app/apple-touch-icon.png" />
        <link rel="manifest" href="/app/site.webmanifest" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
