'use client'

import Link from "next/link";
import { FormEvent, useState } from "react";
import { PiEnvelopeBold, PiLockBold, PiUserBold, PiCircleNotch } from "react-icons/pi";
import CallingImage from '../../../assets/calling2.png'
import Image from "next/image";
import { useAuthContext } from '../../../context/hook'

const SignUp = () => {
  const { signUp, isLoadingAuth } = useAuthContext()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = async (e: FormEvent) => {
    e.preventDefault()

    if (email === '' || password === '' || name === '') {
      alert('Por favor informe nome, email, senha!')
      return
    }

    await signUp({
      name,
      email, 
      password
    })
  }

  return (
    <main className="flex flex-col flex-1 items-center justify-center w-full px-20 text-center">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 items-center max-w-4xl">
        <form onSubmit={register} className="w-3/5 p-5 items-center">
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 mb-2">Realize seu Cadastro</h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#EFEFEF] w-64 p-2 flex items-center rounded-xl mb-3">
              <PiUserBold className="text-gray-400 m-2" />
              <input 
                type="text" 
                placeholder="Nome" 
                className="bg-[#EFEFEF] outline-none text-sm flex-1" 
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="bg-[#EFEFEF] w-64 p-2 flex items-center rounded-xl mb-3">
              <PiEnvelopeBold className="text-gray-400 m-2" />
              <input 
                type="email" 
                placeholder="E-mail" 
                className="bg-[#EFEFEF] outline-none text-sm flex-1" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="bg-[#EFEFEF] w-64 p-2 flex items-center rounded-xl mb-3">
              <PiLockBold className="text-gray-400 m-2" />
              <input 
                type="password" 
                name="password" 
                placeholder="Senha" 
                className="bg-[#EFEFEF] outline-none text-sm flex-1"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white transition-colors">
            {isLoadingAuth ? <PiCircleNotch className="m-2 animate-spin" /> : 'Cadastrar'}
          </button>
        </form>
        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <Image src={CallingImage} alt="Imagem da logo do sistema" priority className="w-auto h-auto" />
          <div className="border-2 w-10 border-white inline-block mb-2" />
          <p className="mb-2">Já tem uma conta ?</p>
          <Link href="/signIn" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 transition-colors">Faça seu Login</Link>
        </div>
      </div>
    </main>
  )
}

export default SignUp