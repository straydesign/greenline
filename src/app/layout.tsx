import type { Metadata } from 'next';
import { Lora, Inter } from 'next/font/google';
import ClientShell from '@/components/layout/ClientShell';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-family-lora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-family-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Greenline Lawn Care | Professional Lawn Maintenance — Erie, PA',
  description:
    'Professional lawn care serving Erie County. Weekly mowing, fertilization, seasonal cleanup, and full-property maintenance. Get a free estimate today.',
  keywords: ['lawn care', 'lawn maintenance', 'Erie PA', 'mowing', 'landscaping', 'fertilization'],
  openGraph: {
    title: 'Greenline Lawn Care | Your Lawn, Handled.',
    description: 'Professional lawn care serving Erie County, PA. Get a free estimate today.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Greenline Lawn Care',
              description: 'Professional lawn care serving Erie County, PA.',
              telephone: '(814) 555-0147',
              email: 'hello@greenlinelawn.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Erie',
                addressRegion: 'PA',
              },
              areaServed: 'Erie County, PA',
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-cream font-body text-foreground antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
