"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EmployeeMeExpensesTicketsRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/employee/tickets")
  }, [router])

  return null
}
