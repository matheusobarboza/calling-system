'use client'

import { useAuthContext } from '../../context/hook'

const Home = () => {
  const { logout } = useAuthContext()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>logout</button>
    </main>
  )
}

export default Home