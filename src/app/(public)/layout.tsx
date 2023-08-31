'use client'

import { useAuthContext } from '@/context/hook'
import { useRouter } from 'next/navigation'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { replace } = useRouter()

  const { isAuthenticated } = useAuthContext()

  if (isAuthenticated) {
    replace('/')
  }

  return (
    <section className='w-full'>
      {children}
    </section>
  )
}
