import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientProvider from './ClientProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MortgageCheck - Financial Services Comparison Platform',
  description: 'Compare mortgages, loans, and financial products with our advanced comparison tools',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <Header />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}