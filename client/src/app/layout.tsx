import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ממחשבה להבעה',
  description: 'ממחשבה להבעה - אפליקצייה להבעה באמצעות הקלדה עבור אנשים עם לקות תקשורתית.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
