"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import {motion} from "framer-motion"

const data = [
  {
    num:"01",
    title:"Backend Engineering",
    description:"I design and build secure, scalable backend systems using Node.js, Express, and MongoDB. I focus on clean architecture, authentication and high-performance  handling for real-world applications.",
    href:""
  },
  {
    num:"02",
    title:"DevOps & CI/CD",
    description:"I implement production-grade DevOps workflows using Docker, Kubernetes, Jenkins, and GitHub Actions. From containerization to automated pipelines, I ensure reliable builds, testing, and seamless deployments.",
    href:""
  },
  {
    num:"03",
    title:"Cloud Engineering (AWS)",
    description:"I architect and manage scalable cloud infrastructure in AWS using tools like Terraform and Ansible. I focus on high availability, cost optimization, and secure cloud deployments.",
    href:""
  },
  {
    num:"04",
    title:"Full-Stack Development",
    description:"I build scalable, high-performance full-stack applications using React, Next.js, Node.js, and MongoDB, ensuring seamless frontend-backend integration.",
    href:""
  },
]


const Services = () => {
  return (
    <section className="min-h[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
          <motion.div initial={{opacity:0}}
          animate={{
            opacity:1,
            transition:{delay:2.4, duration:0.4, ease:"easeInOut"}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
              {

                data.map((item, index) =>{
                  return <div key={index} className="flex flex-1 flex-col justify-center gap-6  group">
                    <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent  group-hover:text-outline-hover">{item.num}</div>
                    <Link className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45" href={item.href}> <BsArrowDownRight className="text-primary text-3xl"/>
                     </Link>
                    </div>
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>
                    <p className="text-white/80">{item.description}</p>
                    <div className="border-b border-white/30 w-full"></div>
                  </div>
                })

              }
          </motion.div >
      </div>
    </section>
  )
}

export default Services
