import React, { FC, ReactNode } from "react"

interface DataWrapperProps {
  loading?: boolean
  error?: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any[]
  children: ReactNode
}

const DataWrapper: FC<DataWrapperProps> = ({
  loading,
  error,
  data,
  children,
}) => {
  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    )
  }

  if (Array.isArray(data) && data.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-400 text-sm">No data found</p>
      </div>
    )
  }

  return <div className="w-full h-full overflow-y-scroll">{children}</div>
}

export default DataWrapper
