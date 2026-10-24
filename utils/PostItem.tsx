"use client"
import React, { useState } from "react"
import { ChatCircleDots, Heart, Repeat, ShareNetwork } from "phosphor-react"
import LikedByModal from "./LikedByModal"
import CommentsModal from "./CommentsModal"

type PostAction = {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

interface PostItemProps {
  title: string
  imageUrl: string
  actions?: PostAction[]
}

const PostItem: React.FC<PostItemProps> = ({
  title,
  imageUrl,
  actions = [],
}) => {
  const [isLikedByOpen, setIsLikedByOpen] = useState(false)
  const [isCommentsOpen, setIsCommentsOpen] = useState(false)

  // Default actions if none provided
  const defaultActions: PostAction[] = [
    {
      icon: <Heart size={20} weight="regular" color="#1C2334" />,
      label: "Like",
      onClick: () => setIsLikedByOpen(true),
    },
    {
      icon: <ChatCircleDots size={20} color="#1C2334" />,
      label: "Comment",
      onClick: () => setIsCommentsOpen(true),
    },
    {
      icon: <Repeat size={20} color="#1C2334" />,
      label: "Repost",
    },
    {
      icon: <ShareNetwork size={20} color="#1C2334" />,
      label: "Share",
    },
  ]

  const finalActions = actions.length > 0 ? actions : defaultActions

  return (
    <div className="shadow-md w-[95%] bg-[#F9FAFB] mt-2 rounded-lg">
      <div className="rounded-b-lg flex flex-col items-start p-2">
        <p className="text-[#1C2334] font-medium text-sm">{title}</p>

        {imageUrl && (
          <div className="w-full flex items-center justify-center mt-2">
            <img
              src={imageUrl}
              alt="post image"
              className="rounded-lg h-45 w-[80%] object-cover"
            />
          </div>
        )}

        <div className="mt-3 flex items-center justify-center gap-7 w-full">
          {finalActions.map((action, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={
                action.onClick ||
                (action.label === "Like"
                  ? () => setIsLikedByOpen(true)
                  : action.label === "Comment"
                  ? () => setIsCommentsOpen(true)
                  : undefined)
              }
            >
              {action.icon}
              <p className="text-xs text-[#1C2334]">{action.label}</p>
            </div>
          ))}
        </div>
      </div>

      <LikedByModal
        isOpen={isLikedByOpen}
        onClose={() => setIsLikedByOpen(false)}
        totalCount={23}
      />

      <CommentsModal
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
      />
    </div>
  )
}

export default PostItem
