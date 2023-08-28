'use client'

import ToastProvider from '@/context/toast.provider'
import '../globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/context/authContext'
import { useAuthContext } from '@/context/hook'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sistema de chamados',
  description: 'Criado por matheusobarboza.',
}

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { isAuthenticated } = useAuthContext()

  console.log('isAuthenticated', isAuthenticated)

  if (!isAuthenticated) {
    redirect('/')
  }

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
