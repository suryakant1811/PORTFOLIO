"use client"

import {Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"

const links= [
  {name: "home", path: "/"},
  {name: "services", path: "/services"},
  {name: "resume", path: "/resume"},
  {name: "work", path: "/work"},
  // {name: "contact", path: "/contact"},
]

const MobNav = () => {

  const path = usePathname()

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center ">
         <div className="mt-20 mb-40 text-center text-2xl">
          <Link href="/">
          <h1 className="text-4xl font-semibold">Surya<span className="text-accent">.</span> </h1>
          </Link>
         </div>
         <nav className="flex flex-col gap-8 "> 
          {links.map((item, index) =>{
          return(
            <Link 
            href={item.path}
             key={index}
             className={`${item.path === path && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all ease-in-out`}>{item.name}</Link>
          )
         } )} </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobNav
