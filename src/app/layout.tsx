
import { AuthProvider } from '@/context/authContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToastProvider from '@/context/toast.provider'

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

  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${inter.className} flex flex-col items-center justify-center min-h-screen text-base font-sans bg-[#EFEFEF] no-underline list-none`}>
          <ToastProvider>
            {children}
          </ToastProvider>
        </body>
      </html>
    </AuthProvider>
  )
}
