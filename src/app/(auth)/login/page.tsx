"use client"

import React from "react"
import { useLogin } from "../../../../features/auth/hooks/login.hook"

const Login = () => {
  const { user, handleChangeInput, handleSubmit } = useLogin()

  return (
    <div className="w-full flex justify-center items-center h-[100vh]">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[500px] p-6 rounded-md bg-white shadow flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold">Login</h2>

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChangeInput}
          className="w-full h-[45px] border border-gray-400 rounded-md outline-none px-2"
          placeholder="Enter Your Email"
          required
        />

        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChangeInput}
          className="w-full h-[45px] border border-gray-400 rounded-md outline-none px-2"
          placeholder="Enter Your Password"
        />

        <button
          type="submit"
          className="w-full h-[45px] bg-blue-500 hover:bg-blue-600 text-xl font-medium rounded-md text-white transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
