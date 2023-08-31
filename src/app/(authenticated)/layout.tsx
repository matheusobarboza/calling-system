'use client'

import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/context/hook'
import Header from '@/components/Header'

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { replace } = useRouter()

  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) {
    replace('/signIn')
  }

  return (
    <section className='w-full min-h-screen flex md:flex-col'>
      <Header />
      {children}
    </section>
  )
}
