'use client'

import { useContext } from "react"
import { AuthContext } from "./authContext"

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  return context
}