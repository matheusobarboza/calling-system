'use client'

import '../globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { Metadata } from 'next'
import { useAuthContext } from '@/context/hook'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Sistema de chamados',
  description: 'Criado por matheusobarboza.',
}

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { isAuthenticated } = useAuthContext()

  console.log('isAuthenticated', isAuthenticated)

  if (isAuthenticated) {
    redirect('/')
  }

  return <>{children}</>
}
