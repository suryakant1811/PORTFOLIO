"use client"

import {motion} from "framer-motion"

import React, {useState} from "react"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const projects = [
  {
    num: "01",
    category:"frontend",
    title:"EcoSheri",
    description:"EcoSheri is an eco-friendly web project with smooth animations using Shery.js, Locomotive Scroll, and GSAP for seamless interactivity and transitions.",
    stack:[{name:"Html 5"}, {name:"Css"},{name:"Javascripts"}],
    image:"/s1.png",
    repo:"https://github.com/suryakant1811/EcoSheri",
    github:"https://eco-sheri.vercel.app"
  },
  {
    num: "02",
    category:"frontend",
    title:"Review ",
    description:"A React project combining GSAP animations and Canvas tools to create dynamic, visually engaging web experiences.",
    stack:[{name:"Html 5"}, {name:"Css"},{name:"React"},{name:"Javascripts"},{name:"GSAP"}],
    image:"/s2.png",
    repo:"https://github.com/suryakant1811/ReactGSAP-AnimationStarter",
    github:"https://react-gsap-animation-starter.vercel.app"
  },
  {
    num: "03",
    category:"frontend",
    title:"Retro-Web",
    description:"Retro-Web is a creative website using HTML, CSS, and JavaScript with Locomotive Scroll for smooth scrolling, GSAP for animations, and custom fonts.",
    stack:[{name:"Html 5"}, {name:"Css"},{name:"React"},{name:"Javascripts"},{name:"GSAP"}],
    image:"/s3.png",
    repo:"https://github.com/suryakant1811/Retro-web",
    github:"https://retroweb-chi.vercel.app/"
  },
  {
    num: "04",
    category:"frontend",
    title:"Lookups",
    description:"A modern web project utilizing HTML, CSS, and JavaScript to create smooth scroll effects and animations. ",
    stack:[{name:"Html 5"}, {name:"Css"},{name:"React"},{name:"Javascripts"},{name:"GSAP"}],
    image:"/s4.png",
    repo:"https://github.com/suryakant1811/Scroll-fx-Studio",
    github:"https://scroll-fx-studio.vercel.app/"
  },
  {
    num: "05",
    category:"frontend",
    title:"Showcase",
    description:"An interactive web UI demonstrating the use of Shery.js for image effects and GSAP for smooth animations. The project features a dynamic background with image transitions",
    stack:[{name:"Html 5"}, {name:"Css"},{name:"React"},{name:"Javascripts"},{name:"GSAP"}],
    image:"/s5.png",
    repo:"https://github.com/suryakant1811/Shery-js",
    github:"https://shery-js-rho.vercel.app"
  },
  {
    num: "06",
    category:"frontend",
    title:"SheryFront",
    description:"SheryFront is a modern web development project leveraging the powerful features of SheryJS. It focuses on delivering dynamic, interactive, and visually stunning user interfaces",
    stack:[{name:"Html 5"}, {name:"Css"},{name:"React"},{name:"Javascripts"},{name:"GSAP"}],
    image:"/s6.png",
    repo:"https://github.com/suryakant1811/SheryFront",
    github:"https://shery-front.vercel.app"
  },
  {
    num: "07",
    category:"frontend",
    title:"Landing-Onn",
    description:"SheryFront is a modern web development project leveraging the powerful features of SheryJS. It focuses on delivering dynamic, interactive, and visually stunning user interfaces",
    stack:[{name:"Html 5"}, {name:"Css"},{name:"React"},{name:"Javascripts"},{name:"GSAP"}],
    image:"/s7.png",
    repo:"https://github.com/suryakant1811/Shery-UI",
    github:"https://shery-ui.vercel.app"
  },

]


const Works = () => {

  const [project, setProject] = useState(projects[0])

  const handelSlideChange = (swiper) => {
    const currIndex = swiper.activeIndex
    setProject(projects[currIndex])
  }

  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay: 1.4, duration:0.5, ease:"easeInOut"}}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
     <div className="container mx-auto">
      
    <div className="flex flex-col xl:flex-row xl:gap-[30px]">

      <div className="w-full xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-[30px] h-[50%]">
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
            {project.num}
          </div>
          <div>
            <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-3">
              {
                project.stack.map((item, index) =>{
                  return <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                  </li>
                })
              }
            </ul>
            <div className="border border-white/30"></div>
            <div className="py-2">
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5">
              <h3 className="text-xl text-white/50 ">Check it out!!...</h3>
              <div className="h-10 w-10 hover:bg-white rounded-full border items-center flex justify-center">
              <BsArrowUpRight className="text-accent text-3xl hover:text-black   transition-transform duration-300 hover:rotate-45" />
              </div>
              </Link>

              <Link href={project.repo} className="flex items-center gap-5">
              <h3 className="text-xl text-white/50 ">Check the repository!!...</h3>
              <div className="h-10 w-10 hover:bg-white rounded-full border items-center flex justify-center">
              <BsGithub className="text-accent text-3xl hover:text-black " />
              </div>
              </Link>

            </div>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-[50%]">
        
        <Swiper 
        spaceBetween={30}
        slidesPerView={1}
        className="xl:h-[520px] mb-12"
        onSlideChange = {handelSlideChange}
        >
          {projects.map((item, index) =>{
            return (<SwiperSlide key={index} className="w-full">
              <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
              <div></div>
                <div className=" relativew-full h-full">

                  <Image src={item.image} fill  alt="img" className="object-contain"/>

                </div>
              </div>
            </SwiperSlide>)
          })}
        
      
          
        </Swiper>

      </div>
    </div>

     </div>

    </motion.section>
  )
}

export default Works
