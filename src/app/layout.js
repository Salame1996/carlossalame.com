import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carlos Salame',
  description: 'Developed by Carlos Salame',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
