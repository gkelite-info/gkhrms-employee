import { redirect } from "next/navigation"

export default function TeamLeadRequestWfhPage() {
  redirect("/teamlead/apply-leave?type=wfh")
}
