import Head from 'next/head'
import logo from '../assets/logo.png'
import { Login, LoginArea, LoginContainer, LoginForm } from '@/components/login/loginStyles'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Head>
        <title>Sistema de Chamados</title>
      </Head>
      <LoginContainer>
        <Login>
          <LoginArea>
            <Image 
              src={logo} 
              alt="Logo do sistema" 
              width={170} 
              height={130}
              style={{
                padding: "20px" 
              }}
            />
          </LoginArea>

          <LoginForm>
            <h1>Entrar</h1>
            <input 
              type="text" 
              placeholder='email@email.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <input 
              type="text" 
              placeholder='*******'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button 
              type="submit"
            >
              Acessar
            </button>
          </LoginForm>

          <Link href="signUp">
            Criar uma conta
          </Link>
        </Login>
      </LoginContainer>
    </>
  )
}
