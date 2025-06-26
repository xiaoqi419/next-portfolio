import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Jason的个人作品集',
  description: 'Created with the help of Frontend Tribe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const normalTitle = 'Jason的个人作品集';
    const hiddenTitle = '喂！快回来看看我的作品呀~';
    const handleVisibility = () => {
      if (document.hidden) {
        document.title = hiddenTitle;
      } else {
        document.title = normalTitle;
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    // 初始化
    document.title = normalTitle;
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'bg-gray-900 text-white antialiased font-sans'
        )}
      >
        {children}
      </body>
    </html>
  );
}
