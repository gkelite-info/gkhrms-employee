"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProfileRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/employee/profile")
  }, [router])

  return (
    <div className="w-full h-full flex items-center justify-center p-8 text-gray-500 text-sm">
      Loading profile...
    </div>
  )
}
