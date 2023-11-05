import type { Metadata } from 'next'
import { Caveat } from 'next/font/google'
import './globals.css'

const inter = Caveat({weight: '700', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Knittershop',
  description: 'Shop for knitted sweatersß',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
