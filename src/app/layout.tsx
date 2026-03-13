import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp';
import CallButton from '@/components/call-button';

export const metadata: Metadata = {
  title: 'Holiday Planner | #1 Travel & Car Rental in Odisha',
  description:
    'Discover Odisha with curated tour packages, premium car rentals, and luxury vehicles. Book your dream trip with Holiday Planner — Bhubaneswar\'s most trusted travel partner with 500+ happy travelers and 4.8★ Google rating.',
  keywords: 'Odisha tours, car rental Bhubaneswar, Puri tour package, Odisha travel planner, tempo traveller Bhubaneswar, luxury car rental Odisha, Odisha tourism, Bhubaneswar car hire',
  authors: [{ name: 'Holiday Planner' }],
  metadataBase: new URL('https://holidayplanners.co'), // Update with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Holiday Planner | #1 Travel & Car Rental in Odisha',
    description: 'Discover Odisha with curated tour packages, premium car rentals, and luxury vehicles.',
    url: 'https://holidayplannes.co',
    siteName: 'Holiday Planner',
    images: [
      {
        url: '/og-image.jpg', // Ensure this exists or use a default
        width: 1200,
        height: 630,
        alt: 'Holiday Planner Odisha',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holiday Planner | #1 Travel & Car Rental in Odisha',
    description: 'Discover Odisha with curated tour packages, premium car rentals, and luxury vehicles.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}

