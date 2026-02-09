import React from "react"
import type { Metadata } from 'next'
import { Poppins, Great_Vibes } from 'next/font/google'

import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Will You Be My Valentine?',
  description: 'A cute Valentine proposal webpage',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
