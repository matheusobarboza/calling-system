import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sistema de chamados',
  description: 'Criado por matheusobarboza.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = false

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center justify-center min-h-screen text-base font-sans py-2 bg-[#EFEFEF] no-underline list-none`}>
        {children}
      </body>
    </html>
  )
}
