'use client'

import { createContext, useState } from "react"
import { auth, db } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

interface IAuthContext {
  user: IUser | null
  isAuthenticated: boolean
  signIn: (credentials: ISignIn) => Promise<void>
  signUp: (credentials: ISignUp) => Promise<void>
  isLoadingAuth: boolean
  // logoutUser: () => Promise<void>
}

interface IUser {
  uid: string
  name: string
  email: string | null
  avatarUrl: string | null
}

interface ISignIn {
  email: string
  password: string
}

interface ISignUp {
  name: string
  email: string
  password: string
}

interface IProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as IAuthContext)

export const AuthProvider = ({ children }: IProps) => {
  const { push, replace } = useRouter()

  const [user, setUser] = useState<IUser | null>(null)
  const [isLoadingAuth, setIsLoadingAuth] = useState(false)

  const signIn = async ({ email, password }: ISignIn) => {
    setIsLoadingAuth(true)

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        let uid = res.user.uid

        const docRef = doc(db, "users", uid)
        const docSnap = await getDoc(docRef)

        let data = {
          uid,
          name: docSnap.data()?.name,
          email: res.user.email,
          avatarUrl: docSnap.data()?.avatarUrl,
        }

        setUser(data)
        storageUser(data)
        setIsLoadingAuth(false)
        replace('/dashboard')
        toast.success('Seja bem vindo(a)')
      })
      .catch(err => {
        console.log(err)
        setIsLoadingAuth(false)
        toast.error('ops! Algo deu errado.')
      })
  }

  const signUp = async ({ name, email, password }: ISignUp) => {
    setIsLoadingAuth(true)

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        let uid = res.user.uid

        await setDoc(doc(db, "users", uid), {
          name,
          avatarUrl: null,
        })
        .then(() => {
          let data = {
            uid,
            name,
            email: res.user.email,
            avatarUrl: null,
          }

          setUser(data)
          setIsLoadingAuth(false)
          replace('/signIn')
          toast.success('Cadastrado com sucesso!')
        })
      })
      .catch(err => {
        console.log(err)
        setIsLoadingAuth(false)
      })
  }

  const storageUser = (data: IUser) => {
    localStorage.setItem('@ticketsPRO', JSON.stringify(data))
  }
  
  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      signIn,
      signUp,
      isLoadingAuth,
    }}>
      {children}
    </AuthContext.Provider>
  )
}