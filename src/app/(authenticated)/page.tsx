'use client'

import Title from '@/components/Title'
import { useAuthContext } from '../../context/hook'
import { FiSettings } from 'react-icons/fi'

const Home = () => {
  const { logout } = useAuthContext()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <main className='w-full p-5'>
      <Title title='Meus chamados'>
        <FiSettings size={25} />
      </Title>
      <button onClick={handleLogout}>logout</button>
    </main>
  )
}

export default Home