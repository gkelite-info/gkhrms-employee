"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EmployeePastRejectedExpensesPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/employee/finance?tab=expenses_travel&subtab=past_rejected")
  }, [router])

  return null
}
