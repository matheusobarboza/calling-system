'use client'

import '../globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
    redirect('/signIn')
  }

  return (
    <>
      {children}
    </>
  )
}
