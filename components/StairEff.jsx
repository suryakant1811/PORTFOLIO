"use client"


import { AnimatePresence, motion, animate} from "framer-motion"
import { usePathname } from "next/navigation"
import Stairs from "./Stairs"

const StairEff = () => {

  const path = usePathname()

  return (
    <AnimatePresence mode="wait">
      <div key={path}>
        <div className="h-screen w-screen fixed top-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
        <motion.div className="h-screen w-screen fixed top-0 bg-primary pointer-events-none" 
        initial={{ opacity: 1 }}
        animate={{opacity: 0, transition: {duration: 0.4, delay: 0.8, ease: "easeInOut"}}}
        />
      </div>
    </AnimatePresence>
  )
}

export default StairEff
