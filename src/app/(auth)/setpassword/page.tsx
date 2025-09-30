'use client'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import axios from 'axios'
import { origin } from '@/api-requests/config'
import { getEmployeeEmail, setPasswordApi } from '@/api-requests/employeeApi'

export default function SetPassword() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const employeeId = searchParams.get('employeeId')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!employeeId) return

        const fetchEmail = async () => {
            try {
                const data = await getEmployeeEmail(employeeId)
                setEmail(data.email)
            } catch (err) {
                console.error('Failed to fetch email:', err)
            }
        }

        fetchEmail()
    }, [employeeId])

    const handleSubmitPassword = async () => {
        if (!password || !confirmPassword) return alert('Enter password')
        if (password !== confirmPassword) return alert('Passwords do not match')

        setLoading(true)
        try {
            await setPasswordApi(Number(employeeId), password)
            alert('Password set successfully!')
            router.push('/signin')
        } catch (err) {
            console.error(err)
            alert('Failed to set password')
        }
        setLoading(false)
    }

    return (
        <div className="bg-green-00 h-screen flex items-center justify-center">
            <div className="bg-white h-full w-full flex">
                <div className="bg-red-00 w-[50%] h-full flex items-center justify-center">
                    <div className="bg-white w-[65%] p-3 flex flex-col items-start justify-between rounded-lg shadow-md">
                        <p className="text-black">LOGO</p>
                        <div className="bg-blue-00 w-full h-[90%] flex flex-col items-center">
                            <h2 className="text-[#323232] font-semibold text-lg">Set Password</h2>

                            {email && (
                                <div className="flex flex-col w-full mt-4">
                                    <label className="mb-1 text-sm font-medium text-[#323232]">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        disabled
                                        className="border rounded-md px-3 py-2 border-[#AFAFAF] text-[#777777] text-sm focus:outline-none mb-2 bg-gray-100"
                                    />
                                </div>
                            )}

                            <div className="flex flex-col w-full mt-4">
                                <label className="mb-1 text-sm font-medium text-[#323232]">Create Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border rounded-md px-3 py-2 border-[#AFAFAF] text-[#777777] text-sm focus:outline-none mb-2"
                                />

                                <label className="mb-1 text-sm font-medium text-[#323232]">Retype Password</label>
                                <input
                                    type="password"
                                    placeholder="Retype password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleSubmitPassword();
                                        }
                                    }}
                                    className="border rounded-md px-3 py-2 border-[#AFAFAF] text-[#777777] text-sm focus:outline-none"
                                />

                                <button
                                    onClick={handleSubmitPassword}
                                    disabled={loading}
                                    className="w-full mt-3 bg-[#874DE6] text-white py-2 rounded-md text-sm font-medium"
                                >
                                    {loading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F6F0FF] h-full w-[50%] flex items-center justify-center">
                    <img src="/images/Login.png" alt="Login.png" className="h-[100%]" />
                </div>
            </div>
        </div>
    )
}
