'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    try {
      const res = await axios.post('http://localhost:5000/api/v1/employees/login', {
        email,
        password
      })
      const employee = res.data.employee

      console.log('Login Success:', employee)

      if (employee.role === 'admin') {
        router.push('/admin')
      } else if (employee.role === 'employee') {
        router.push('/employee')
      } else if (employee.role === 'hr') {
        router.push('/hr')
      }
      else if (employee.role === 'manager') {
        router.push('/manager')
      }
      else {
        router.push('/unauthorized')
      }

    } catch (err: any) {
      alert(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="h-screen flex">
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-[70%] p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-[#323232] text-center">Login</h2>

          <div className="mb-3">
            <label className="block mb-1 text-[#323232]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-2 py-1 border-[#AFAFAF] text-sm text-[#777777] focus:outline-none text-[#323232] rounded"
            />
          </div>

          <div className="mb-3">
            <label className="block mb-1 text-[#323232]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) =>{
                if(e.key === 'Enter'){
                  e.preventDefault();
                  handleLogin();
                }
              }}
              className="w-full border px-2 py-1 border-[#AFAFAF] focus:outline-none text-[#777777] rounded"
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#874DE6] text-white py-2 rounded mb-2 cursor-pointer">{loading ? 'Logging in...' : 'Login'}</button>
        </div>
      </div>

      <div className="w-1/2 bg-[#F6F0FF] flex items-center justify-center">
        <img src="/images/Login.png" alt="Login Image" className="h-full object-cover" />
      </div>
    </div>
  )
}
