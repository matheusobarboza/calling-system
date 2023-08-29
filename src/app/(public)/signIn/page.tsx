'use client'

import Link from "next/link";
import { useState, FormEvent } from "react";
import { PiCircleNotch, PiEnvelopeBold, PiLockBold } from "react-icons/pi";
import CallingImage from '../../../assets/calling2.png'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/hook";

const SignIn = () => {
  const { signIn, isLoadingAuth } = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const login = async (e: FormEvent) => {
    e.preventDefault()

    if (email === '' || password === '') {
      alert('Por favor informe email e senha!')
      return
    }

    await signIn({
      email, 
      password})
    
      setEmail('')
      setPassword('')
  }

  return (
    <main className="flex flex-col flex-1 items-center justify-center w-full px-20 text-center">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 items-center max-w-4xl">
        <form onSubmit={login} className="w-3/5 p-5 items-center">
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 mb-2">Faça seu Login</h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2" />
          </div>
          <div className="flex flex-col items-center justify-center">
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
            {isLoadingAuth ? <PiCircleNotch className="m-2 animate-spin" /> : 'Entrar'}
          </button>
        </form>
        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          {/* <h2 className="text-3xl font-bold mb-2">Olá, Seja Bem Vindo</h2> */}
          <Image src={CallingImage} alt="Imagem da logo do sistema" className="w-auto h-auto" />
          <div className="border-2 w-10 border-white inline-block mb-2" />
          <p className="mb-2">Gerencie seus chamados da melhor forma!</p>
          <Link href="/signUp" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 transition-colors">Cadastre-se</Link>
        </div>
      </div>
    </main>
  )
}

export default SignIn