"use client"

export default function NotificationCount({
  count,
  style = "-top-1 -right-1",
}: {
  count: number
  style?: string
}) {
  const isThreeDigits = count >= 100
  const textSize = isThreeDigits ? "text-[7px]" : "text-[9px]"

  return (
    <div
      className={`absolute bg-red-500 h-4 w-4 rounded-full flex items-center justify-center cursor-pointer  ${style}`}
    >
      <p className={`${textSize} text-white`}>{count}</p>
    </div>
  )
}
