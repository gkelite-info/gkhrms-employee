"use client"
import React from "react"
import { motion } from "framer-motion"

const steps = ["Leave", "Payroll", "IT Tickets"]

const AdminWorkflowBuilder: React.FC = () => {
  return (
    <motion.div
      className="w-full lg:w-1/2 bg-white rounded-lg p-4 flex flex-col gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-[#111827] font-semibold text-sm">Workflow Builder</h2>

      <div className="w-full flex justify-between items-center">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <motion.span
              className="min-w-[120px] h-[40px] rounded-lg bg-[#D7D5FF] flex justify-center items-center text-xs cursor-pointer text-[#464646]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: idx * 0.2, duration: 0.5, ease: "easeOut" }}
            >
              {step}
            </motion.span>

            {idx < steps.length - 1 && (
              <motion.div
                className="flex-1 flex items-center mx-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  delay: idx * 0.2 + 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <div className="flex-1 border-t-2 border-dashed border-gray-400" />
                <span className="text-gray-500">➔</span>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      <h3 className="text-sm text-[#000000] mt-4">Security Alerts</h3>
      <motion.ul
        className="list-disc pl-4 flex flex-col gap-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      >
        <li className="text-xs text-[#464646]">Failed Logins</li>
        <li className="text-xs text-[#464646]">Unusual access attempts</li>
        <li className="text-xs text-[#464646]">Geo-Based login flags</li>
      </motion.ul>
    </motion.div>
  )
}

export default AdminWorkflowBuilder
