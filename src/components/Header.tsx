import Image from "next/image"
import AvatarImg from '../assets/avatar.png'
import { useAuthContext } from "@/context/hook"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { FiHome, FiSettings, FiUser } from 'react-icons/fi'

const Header = () => {
  const { user } = useAuthContext()
  const pathname = usePathname()

  return (
    <div className="bg-[#181c2e] h-screen overflow-auto flex flex-col items-center min-w-[200px] md:w-full md:h-auto md:relative">
      <div className="py-8 bg-[url('../assets/cover.png')] bg-no-repeat bg-cover bg-center h-144 w-full flex justify-center items-center md:hidden">
        {/* <Image src="https://sujeitoprogramador.com/steve.png" width={90} height={90} alt="Foto do usuário" className="drop-shadow-lg object-cover block m-auto rounded-full" /> */}
        <Image src={user?.avatarUrl === null ? AvatarImg : user?.avatarUrl} alt="Foto do usuário" width={90} height={90} className="drop-shadow-lg block m-auto object-cover rounded-full" />
      </div>

      <div className="flex flex-col w-full text-white md:flex-row">
        <Link href='/' className={`group transition-colors flex w-full gap-5 hover:bg-[#121212] p-4 text-[rgba(255,255,255,0.7)] md:justify-center ${pathname === '/' ? 'bg-[#121212] text-white' : ''}`}>
          <FiHome className={`group-hover:text-white text-[rgba(255,255,255,0.7)] ${pathname === '/' ? 'text-white' : ''}`} size={24} />
          <span className="group-hover:text-white">Chamados</span>
        </Link>

        <Link href='/customers' className={`group transition-colors flex w-full gap-5 hover:bg-[#121212] p-4 text-[rgba(255,255,255,0.7)] md:justify-center ${pathname === '/customers' ? 'bg-[#121212] text-white' : ''}`}>
          <FiUser className={`group-hover:text-white text-[rgba(255,255,255,0.7)] ${pathname === '/customers' ? 'text-white' : ''}`} size={24} />
          <span className="group-hover:text-white">Clientes</span>
        </Link>

        <Link href='/profile' className={`group transition-colors flex w-full gap-5 hover:bg-[#121212] p-4 text-[rgba(255,255,255,0.7)] md:justify-center ${pathname === '/profile' ? 'bg-[#121212] text-white' : ''}`}>
          <FiSettings className={`group-hover:text-white text-[rgba(255,255,255,0.7)] ${pathname === '/profile' ? 'text-white' : ''}`} size={24} />
          <span className="group-hover:text-white">Perfil</span>
        </Link>
      </div>
    </div>
  )
}

export default Header