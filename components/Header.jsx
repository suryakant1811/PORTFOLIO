import Link from "next/link"
import Nav from "./Nav"
import MobNav from "./MobNav"

const header = () => {
  return (

      <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex items-center justify-between">
            <Link href="/">
                <h1 className="text-4xl font-bold">Suryakant 
                  <span className="text-accent">.</span>
                </h1>
            </Link>

            {/* only for desktop  */}
            <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
            <button className="bg-accent border  px-3 py-[0.5] text-black rounded-xl">Hire me</button>
            </Link>
            </div>

            <div className="xl:hidden"> 
              <MobNav />
            </div>

        </div>
      </header>
    
  )
}

export default header
