import Image from "next/image"
import AvatarImg from '../assets/avatar.png'
import { useAuthContext } from "@/context/hook"
import Link from "next/link"
import { FiHome, FiSettings, FiUser } from 'react-icons/fi'

const Header = () => {
  const { user } = useAuthContext()

  return (
    <div className="bg-[#181c2e] h-full fixed overflow-auto w-48 flex flex-col items-center">
      <div className="py-8 bg-[url('../assets/cover.png')] bg-no-repeat bg-cover bg-center h-144 w-full flex justify-center">
        {/* <Image src="https://sujeitoprogramador.com/steve.png" width={90} height={90} alt="Foto do usuário" className="drop-shadow-lg object-cover block m-auto rounded-full" /> */}
        <Image src={user?.avatarUrl === null ? AvatarImg : user?.avatarUrl} alt="Foto do usuário" className="w-[90px] h-[90px] drop-shadow-lg object-cover block m-auto rounded-full" />
      </div>

      <div className="flex flex-col w-full text-white px-5 mt-5 gap-5">
        <Link href='/dashboard' className="flex gap-5 hover:bg-[#121212] block p">
          <FiHome className="text-white" size={24} />
          Chamados
        </Link>

        <Link href='/customers' className="flex gap-5">
          <FiUser className="text-white" size={24} />
          Clientes
        </Link>

        <Link href='/profile' className="flex items-center gap-5">
          <FiSettings className="text-white" size={24} />
          Perfil
        </Link>
      </div>
    </div>
  )
}

export default Header