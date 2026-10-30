"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EmployeeMePerformanceRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/employee/performance")
  }, [router])

  return null
}
