"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EmployeeExpensesRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/employee/finance?tab=expenses_travel")
  }, [router])

  return null
}
