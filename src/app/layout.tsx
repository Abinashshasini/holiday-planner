import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header';
import WhatsAppButton from '@/components/whatsapp';
import CallButton from '@/components/call-button';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 200 300 400 500 600 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 200 300 400 500 600 900',
});

export const metadata: Metadata = {
  title: 'Holiday Planner | Plan Your Perfect Getaway',
  description:
    'Experience hassle-free car booking services at affordable prices with holiday planner. Book exotic cars and premium vehicles online for your journeys, events, or special occasions. Rent luxury cars effortlessly and enjoy top-notch service tailored to your needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}
