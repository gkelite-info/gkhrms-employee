import React from "react"
import AdminChangeImpactPreview from "./AdminChangeImpactPreview"
import AdminWorkflowBuilder from "./AdminWorkflowBuilder"

const ChangeImpactWorkflowBuilder = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-2.5">
      <AdminChangeImpactPreview />
      <AdminWorkflowBuilder />
    </div>
  )
}

export default ChangeImpactWorkflowBuilder
