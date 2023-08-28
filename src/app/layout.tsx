import ToastProvider from '@/context/toast.provider'
import { AuthProvider } from '../context/authContext'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
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

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center justify-center min-h-screen text-base font-sans py-2 bg-[#EFEFEF] no-underline list-none`}>
        <AuthProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
