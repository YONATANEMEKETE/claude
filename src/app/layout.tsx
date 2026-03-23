import type { Metadata } from 'next';
import { Inter, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--default' });

const sourceSans3 = Source_Sans_3({ subsets: ['latin'], variable: '--main' });

export const metadata: Metadata = {
  title: 'Clause - Contract Management Software',
  description:
    'Clause helps legal teams work faster, smarter, and more efficiently with contract management software.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          sourceSans3.variable,
          'min-h-screen, antialiased font-default',
        )}
      >
        {children}
      </body>
    </html>
  );
}
