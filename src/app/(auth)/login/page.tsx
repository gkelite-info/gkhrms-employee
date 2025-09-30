'use client'
import { useState, useRef } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { origin } from '@/api-requests/config'
import { sendOtp, verifyOtp } from '@/api-requests/employeeApi'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(['', '', '', ''])
  const [otpSent, setOtpSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const inputRefs = useRef<Array<HTMLInputElement | null>>([])

  const handleSendOtp = async () => {
    if (!email) return alert('Enter your email')
    try {
      setLoading(true)
      const data = await sendOtp(email)
      console.log(data)
      setOtpSent(true)
    } catch (err: any) {
      alert(err.response?.data?.message || 'Failed to send OTP')
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async () => {
    const otpValue = otp.join('')
    if (otpValue.length !== 4) return alert('Enter valid OTP')

    try {
      setLoading(true)
      const data = await verifyOtp(email, otpValue)
      console.log(data)
      const employeeId = data.employeeId
      router.push(`/setpassword?employeeId=${employeeId}`)
    } catch (err: any) {
      alert(err.response?.data?.message || 'Failed to verify OTP')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-green-00 h-screen flex items-center justify-center">
      <div className="bg-white h-full w-full flex">
        <div className="bg-red-00 w-[50%] h-full flex items-center justify-center">
          <div className="bg-white w-[65%] p-3 flex flex-col items-start justify-between rounded-lg shadow-md">
            <p className="text-black">LOGO</p>
            <div className="bg-blue-00 w-full h-[90%] flex flex-col items-center">
              <h2 className="text-[#323232] font-semibold text-lg">Login</h2>

              <div className="flex flex-col w-full mt-2">
                <label className="mb-1 text-sm font-medium text-[#323232]">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      handleSendOtp()
                    }
                  }}
                  className="border rounded-md px-3 py-2 border-[#AFAFAF] text-[#777777] text-sm focus:outline-none"
                />
              </div>

              {!otpSent && (
                <button
                  onClick={handleSendOtp}
                  disabled={loading}
                  className="w-full mt-3 bg-[#874DE6] text-white py-2 rounded-md text-sm font-medium"
                >
                  {loading ? 'Sending OTP...' : 'Send OTP'}
                </button>
              )}

              {otpSent && (
                <>
                  <div className="flex flex-col w-full mt-4">
                    <label className="mb-1 text-sm font-medium text-[#323232]">OTP</label>
                    <div className="flex space-x-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <input
                          key={i}
                          ref={(el) => { inputRefs.current[i] = el }}
                          value={otp[i]}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const val = e.target.value.replace(/\D/g, '')
                            setOtp((prev) => prev.map((v, idx) => (idx === i ? val : v)))

                            if (val && i < 3) {
                              inputRefs.current[i + 1]?.focus()
                            }
                          }}
                          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Backspace' && !otp[i] && i > 0) {
                              inputRefs.current[i - 1]?.focus()
                            }
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleVerifyOtp();
                            }
                          }}
                          maxLength={1}
                          className="w-10 h-10 text-black text-sm text-center border rounded-md border-[#AFAFAF] text-lg focus:outline-none"
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleVerifyOtp}
                    disabled={loading}
                    className="w-full mt-4 bg-[#874DE6] text-white py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    {loading ? 'Verifying...' : 'Verify OTP'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="bg-[#F6F0FF] h-full w-[50%] flex items-center justify-center">
          <img src="/images/Login.png" alt="" className="h-[100%]" />
        </div>
      </div>
    </div>
  )
}
