import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Simple-Mart',
  description: 'simple mart website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
