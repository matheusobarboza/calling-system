'use client'

import React, { FormEvent } from 'react'
import Title from "@/components/Title"
import { FiSettings, FiUpload } from "react-icons/fi"
import avatarImg from '../../../assets/avatar.png'
import { useAuthContext } from "@/context/hook"
import { useState } from "react"
import Image from "next/image"
import { toast } from "react-toastify"
import { doc, updateDoc } from 'firebase/firestore'
import { db, storage } from '@/services/firebaseConnection'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const Profile = () => {
  const { user, storageUser, setUser, logout } = useAuthContext()

  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl || null)
  const [imageAvatar, setImageAvatar] = useState<File | null>(null)

  const [name, setName] = useState(user && user.name || '')
  const [email, setEmail] = useState(user && user.email || '')

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const image = e.target.files[0]

      if (image.type === 'image/jpeg' || image.type === 'image/png') {
        setImageAvatar(image)
        setAvatarUrl(URL.createObjectURL(image))
      } else {
        toast.warn("Envie uma imagem do tipo PNG ou JPEG")
        setImageAvatar(null)
        setAvatarUrl(null)
        return
      }
    }
  }

  const upload = async () => {
    if (imageAvatar) {
      const currentUid = user?.uid || ''

      const uploadRef = ref(storage, `images/${currentUid}/${imageAvatar && imageAvatar.name}`)

      try {
        uploadBytes(uploadRef, imageAvatar)
        .then(res => {
          getDownloadURL(res.ref).then(async (downloadURL) => {
            let urlImage = downloadURL

            const docRef = doc(db, "users", currentUid)
            await updateDoc(docRef, {
              avatarUrl: urlImage,
              name: name,
            })
              .then(() => {
                let data = {
                  uid: currentUid,
                  name: name,
                  email: email,
                  avatarUrl: avatarUrl,
                }

                setUser(data)
                storageUser(data)
                toast.success("Atualizado com sucesso!")
              })
          })
        })
      } catch (err) {
        console.error(err)
        toast.error("Erro ao atualizar")
      }
    }
  }

  const onSave = async (e: FormEvent) => {
    e.preventDefault()

    if (imageAvatar === null && name !== '') {
      const uid = user?.uid || ''
      const docRef = doc(db, "users", uid)
      await updateDoc(docRef, {
        name: name,
      })
        .then(() => {
          let data = {
            uid: uid,
            name: name,
            email: email,
            avatarUrl: avatarUrl,
          }

          setUser(data)
          storageUser(data)
          toast.success("Atualizado com sucesso!")
        })
    } else if (name !== '' && imageAvatar !== null) {
      try {
        await upload()
      } catch (err) {
        console.error("Erro ao fazer upload: ", err)
        toast.error("Erro ao fazer upload: ")
      }
    }
  }

  return (
    <main className="p-5 w-full">
      <div>
        <Title title="Minha Conta">
          <FiSettings size={25} />
        </Title>

        <form onSubmit={onSave} className="flex flex-col bg-[#f8f8f8] rounded-md p-3 mb-4">
          <label className="w-72 h-72 flex justify-center items-center flex-col cursor-pointer mb-2 text-xl">
            <span className="z-99 absolute opacity-70 hover:opacity-100 hover:scale-150 transition-transform">
              <FiUpload className="text-white" size={25} />
            </span>

            <input className="hidden" type="file" accept="image/*" onChange={handleFile} /> <br />
            {avatarUrl === null ? (
              <Image src={avatarImg} alt="Foto do perfil" width={250} height={250} className="mb-4 w-full h-full rounded-full object-cover" />
            ) : (
              <Image src={avatarUrl} alt="Foto do perfil" width={250} height={250} className="mb-4 w-full h-full rounded-full object-cover" />
            )}
          </label>

          <label className="mb-2 text-xl">Nome</label>
          <input value={name} onChange={e => setName(e.target.value)} className="mb-4 p-3 border-0 rounded-md max-w-xl disabled:cursor-not-allowed" type="text" placeholder="Seu nome" />

          <label className="mb-2 text-xl">Email</label>
          <input value={email} className="mb-4 p-3 border-0 rounded-md max-w-xl disabled:cursor-not-allowed text-zinc-500" type="email" disabled placeholder="usuario@email.com" />

          <button className="max-w-xl bg-[#181c2e] rounded-lg p-2 text-white" type="submit">Salvar</button>
        </form>

        <div className="flex bg-[#f8f8f8] rounded-md items-center">
          <button onClick={() => logout()} className="py-1 px-5 border border-[#121212] rounded-md text-xl flex justify-center items-center">Sair</button>
        </div>
      </div>
    </main>
  )
}

export default Profile