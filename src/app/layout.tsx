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
    'Discover why Holiday Planner is your ultimate choice for stress-free, personalized vacation planning. Explore top destinations, curated itineraries, and exclusive deals.',
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
