import { redirect } from "next/navigation"

export default function ManagerRequestWfhPage() {
  redirect("/manager/apply-leave?type=wfh")
}

