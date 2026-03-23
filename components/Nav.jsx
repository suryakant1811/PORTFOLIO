"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  {name: "About", path: "/"},
  {name: "services", path: "/services"},
  {name: "resume", path: "/resume"},
  {name: "work", path: "/work"},
  // {name: "contact", path: "/contact"},
]

const Nav = () => {

  const path = usePathname()

  return (
    <nav className="flex gap-8">
      
      {
        links.map((item, index) => {
          return (
            <Link href={ item.path} key={index}
             className={`${item.path === path && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all ease-in-out` }
            >{item.name}</Link>
          )
        })
      }

    </nav>
  )
}

export default Nav


//avi app me routes banane hai