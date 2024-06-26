import type { Metadata } from 'next';
import { Exo } from 'next/font/google';

import './globals.css';

import SessionWrapper from '@/components/shared/SessionWrapper.component';
import NavBar from '@/components/shared/NavBar.component';
import Footer from '@/components/shared/Footer.Component';

const exo = Exo({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Power Up Store',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <SessionWrapper>
        <body className={exo.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </SessionWrapper>
    </html>
  );
}
