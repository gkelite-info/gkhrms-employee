"use client"
import { motion } from "framer-motion"
import { Megaphone } from "phosphor-react"
import React, { useState } from "react"
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
        className="w-[35%] flex items-start justify-end px-5 py-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <motion.div
          className="bg-[#F9FAFB] h-13 w-13 rounded-full flex items-center justify-center shadow"
          onClick={() => setDrawerOpen(true)}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Megaphone
            size={28}
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
