"use client"
import { motion } from "framer-motion"
import { Megaphone } from "phosphor-react"
import { useState } from "react"
import NotificationCount from "./notificationCount"
import RightDrawer from "./RightDrawer"
import PostUploadCard from "./PostUploadCard"
import BirthdatNewJoinCount from "./BirthdatNewJoinCount"
import QuickUpdatedPostCard from "./QuickUpdatedPostCard"
import PostItem from "./PostItem"

const MicrCircle = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  return (
    <>
      <motion.div
        className="flex items-center justify-end shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <motion.div
          className="bg-[#F9FAFB] h-12 w-12 rounded-full flex items-center justify-center shadow-xs border border-gray-100 cursor-pointer"
          onClick={() => setDrawerOpen(true)}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Megaphone
            size={24}
            color="#874DE6"
            weight="fill"
            className="cursor-pointer"
          />
          <NotificationCount count={2} />
        </motion.div>
      </motion.div>
      <RightDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <PostUploadCard />
        <BirthdatNewJoinCount />
        <QuickUpdatedPostCard />
        <PostItem
          imageUrl="/images/occation.png"
          title="Occation of the Day."
        />
        <PostItem imageUrl="/images/event.jpg" title="Spotlight Events." />
      </RightDrawer>
    </>
  )
}

export default MicrCircle
