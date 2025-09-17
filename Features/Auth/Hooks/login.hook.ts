import { ChangeEvent, useState } from "react"

export type loginData = {
  email: string
  password: string
}

export const useLogin = () => {
  const [user, setUser] = useState<loginData>({
    email: "",
    password: "",
  })

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return {
    user,
    handleChangeInput,
    handleSubmit,
  }
}
