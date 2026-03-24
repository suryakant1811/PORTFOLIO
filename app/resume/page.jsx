"use client"
import React from "react";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaJava, FaPython, FaAws} from "react-icons/fa"
import { PiStudentDuotone } from "react-icons/pi";
import { SiTailwindcss, SiNextdotjs, SiDocker, SiKubernetes, SiJenkins, SiTerraform, SiAnsible } from "react-icons/si"
import { TbBrandCpp } from "react-icons/tb";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"



import {ScrollArea} from "@/components/ui/scroll-area"

import {motion} from "framer-motion"

const data = {
  title:"About me",
  description: "I solve real-world problems by building end-to-end applications with scalable backend systems and cloud-native technologies.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Suryakant Dwivedi"
    },
    {
      fieldName:"Phone",
      fieldValue:"+91 6307919337"
    },
    {
      fieldName:"Experiance",
      fieldValue:"1+ year"
    },
    {
      fieldName:"Nationality",
      fieldValue:"India"
    },
    {
      fieldName:"Email",
      fieldValue:"surajdwivedi644@gmail.com"
    },
    {
      fieldName:"Languages",
      fieldValue:"English, Hindi, Bhojpuri"
    },
   
  ]
}

const education = {

  icons:<PiStudentDuotone />,
  title:"My education",
  description: "Currently pursuing a B.Tech in Computer Science at Lovely Professional University, with a focous on software development, fullstack developer along with devOps, AI and cloud computing. ",
  items:[
     {
      degree:"Matriculation",
      duration:"St Mary’s School, UP",
      institution:"April 2019 - March 2020"
    },
    {
      degree:"Intermediate",
      duration:"St Mary’s School, UP",
      institution:"April 2021 - March 2022"
    },
    {
      institution:"Lovely Professional University",
      degree:"Btech CSE",
      duration:"2023 - 2027"
    },
   
  ]

}

const skills = {
  title:"My skills",
  description: "Hands-on experience in backend development, AWS cloud infrastructure, and DevOps practices along AI.",
  list:[
    {
      icon: <FaHtml5 />,
      name:"html 5"
    },
    {
      icon: <FaCss3 />,
      name:"Css"
    },
    {
      icon: <SiTailwindcss />,
      name:"Tailwind"
    },
    {
      icon: <FaJs />,
      name:"JavaScript"
    },
    {
      icon: <FaReact />,
      name:"React"
    },
    {
      icon: <FaFigma />,
      name:"Figma"
    },
    {
      icon: <FaNodeJs />,
      name:"NodeJs"
    },
    {
      icon: <FaJava />,
      name:"Java"
    },
    {
      icon: <TbBrandCpp />,
      name:"C/Cpp"
    },
    {
      icon: <FaPython />,
      name:"Python"
    },
    {
      icon: <SiNextdotjs />,
      name:"Nextjs"
    },
    {
      icon: <SiDocker />,
      name:"Docker"
    },
    {
      icon: <SiKubernetes />,
      name:"Kubernetes"
    },
    {
      icon: <SiJenkins />,
      name:"Jenkins"
    },
    {
      icon: <SiTerraform />,
      name:"Terraform"
    },
    {
      icon: <SiAnsible />,
      name:"Ansible"
    },
    {
      icon: <FaAws />,
      name:"AWS"
    },
    {
      icon: <SiKubernetes />,
      name:"EKS"
    },
  ]
}

const experiance = {
  title: "My Experience",
  description: "Hands-on experience building scalable backend systems and deploying production-grade applications using AWS, DevOps, and cloud-native technologies.",
  items: [
    {
      company: "ShapeOurSpace",
      role: "Full-Stack & DevOps Intern",
      duration: "Dec 2025 - Jan 2026",
      responsibilities: [
        "Architected and developed a scalable MERN application with JWT-based RBAC and OTP authentication, reducing unauthorized access by ~40%.",
        "Containerized and deployed applications using Docker and AWS, implementing CI/CD workflows for high availability and scalability.",
        "Optimized backend APIs and state management, reducing latency by ~30% and improving concurrent user handling via AWS EKS."
      ]
    },
    {
      company: "SampurnaKart Innovations Pvt. Ltd",
      role: "Backend & DevOps Intern",
      duration: "Apr 2025 - Jul 2025",
      responsibilities: [
        "Built secure backend services with authentication and Razorpay integration, improving payment success rate by ~20%.",
        "Implemented CI/CD pipelines using GitHub Actions, SonarQube, and containerization for stable and reliable deployments.",
        "Migrated infrastructure from AWS to DigitalOcean, reducing costs by ~45% and automated provisioning using Terraform and Ansible."
      ]
    }
  ]
};

const certificates = {
  title: "My Certificates",
  description: "Professional certifications and credentials showcasing continuous learning and expertise in various domains.",
  items: [
    {
      name: "Job Ready Cohort",
      link: "#",
      date: "November 2025"
    },
    {
      name: "Data Structures & Algorithms",
      link: "#",
      date: "July 2025"
    },
    {
      name: "Cloud Computing",
      link: "#",
      date: "May 2025"
    },
    {
      name: "ChatGPT, GenAI & Machine Learning",
      link: "#",
      date: "August 11, 2025"
    }
  ]
};



const Resume = () => {
  return (
    <motion.div initial={{opacity:0}}
    animate={{opacity:1,
      transition:{delay:1,duration:0.4,ease:"easeIn"}
    }}
    className="min-h-[80vh] flex items-center justify-center py-16  xl:py-0 "
    >
     <div className="container  mx-auto">

<Tabs defaultValue="data" className="flex mt-20 flex-col xl:flex-row gap-[60px] text-white rounded-xl">

  <TabsList  className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
    <TabsTrigger value="education" className="border rounded-xl w-full py-3 transition-all duration-300 text-white hover:text-green-500 data-[state=active]:bg-accent">Education</TabsTrigger>
    <TabsTrigger value="skills" className="border rounded-xl w-full py-3 transition-all duration-300 text-white hover:text-green-500 data-[state=active]:bg-accent">Skills</TabsTrigger>
    <TabsTrigger value="data" className="border rounded-xl w-full py-3 transition-all duration-300 text-white hover:text-green-500 data-[state=active]:bg-accent">About me</TabsTrigger>
    <TabsTrigger value="experiance" className="border rounded-xl w-full py-3 transition-all duration-300 text-white hover:text-green-500 data-[state=active]:bg-accent">Experiance</TabsTrigger>
    <TabsTrigger value="certificates" className="border rounded-xl w-full py-3 transition-all duration-300 text-white hover:text-green-500 data-[state=active]:bg-accent">Certificates</TabsTrigger>
  </TabsList>

    <div className="min-h-[70vh] xl:-mt-36 mt-20 w-full">

    <TabsContent value="education" className="text-white ">
      
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h1 >{education.icons}</h1>
        <h3 className="text-4xl font-bold text-white hover:text-green-500">{education.title}</h3>
        <p className="max-w-[600px] text-white/60 hover:text-green-500 mx-auto xl:mx-0">{education.description}</p>

        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {
              education.items.map((item, index) => {
                return <div key={index}>
                  <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-white hover:text-green-500">{item.degree}</span>
                    <span className="text-white hover:text-green-500">{item.duration}</span>
                    <div className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-accent"></span>
                      <p className="text-white/80 hover:text-green-500">{item.institution}</p>
                    </div>
                  </li>
                </div>
              })
            }
          </ul>
        </ScrollArea>

      </div>

    </TabsContent>

    <TabsContent value="skills" className="text-white">
      
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      
      <h3 className="text-4xl font-bold text-white hover:text-green-500">{skills.title}</h3>
      <p className="max-w-[600px] text-white/60 hover:text-green-500 mx-auto xl:mx-0">{skills.description}</p>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   gap-[30px]">
          {
            skills.list.map((item, index) => {
              return <div key={index}>
                <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                <span className="text-white hover:text-green-500">
                  {React.cloneElement(item.icon, { size: 40 })}
                </span>

                  <span className="text-white hover:text-green-500">{item.name}</span>
                
                </li>
              </div>
            })
          }
        </ul>
      </ScrollArea>

    </div>

    </TabsContent>
    <TabsContent value="data" className="text-white">

    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      
        <h3 className="text-4xl font-bold text-white hover:text-green-500">{data.title}</h3>
        <p className="max-w-[600px] text-white/60 hover:text-green-500 mx-auto xl:mx-0">{data.description}</p>

         
          <ul className="grid  lg:grid-cols-2 gap-[30px]">
            {
              data.info.map((item, index) => {
                return <div key={index}>
                  <li className="py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-white hover:text-green-500">{item.fieldName}</span>
                    <span className="text-white hover:text-green-500">{item.fieldValue}</span>
                  
                  </li>
                </div>
              })
            }
          </ul>
         

      </div>

    </TabsContent>
    <TabsContent value="experiance" className="text-white">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold text-white hover:text-green-500">{experiance.title}</h3>
        <p className="max-w-[600px] text-white/60 hover:text-green-500 mx-auto xl:mx-0">{experiance.description}</p>

        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {
              experiance.items.map((item, index) => {
                return <div key={index}>
                  <li className="bg-[#232329] py-6 px-6 sm:px-8 rounded-xl flex flex-col justify-start items-center lg:items-start gap-3 w-full">
                    <div className="w-full">
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Company</p>
                      <p className="text-white font-bold hover:text-green-500 text-sm">{item.company}</p>
                    </div>
                    <div className="w-full">
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Role</p>
                      <h3 className="text-lg text-white hover:text-green-500 leading-tight w-full">{item.role}</h3>
                    </div>
                    <div className="w-full">
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Duration</p>
                      <span className="text-white hover:text-green-500 text-sm">{item.duration}</span>
                    </div>
                    <div className="text-left w-full">
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Key Responsibilities</p>
                      <ul className="text-xs text-white/70 hover:text-green-500 space-y-1.5">
                        {item.responsibilities.slice(0, 3).map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent mt-0.5 text-xs flex-shrink-0">•</span>
                            <span className="leading-tight break-words">{resp.length > 75 ? resp.substring(0, 75) + '...' : resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </div>
              })
            }
          </ul>
        </ScrollArea>

      </div>
    </TabsContent>

    <TabsContent value="certificates" className="text-white">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold text-white hover:text-green-500">{certificates.title}</h3>
        <p className="max-w-[600px] text-white/60 hover:text-green-500 mx-auto xl:mx-0">{certificates.description}</p>

        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {
              certificates.items.map((item, index) => {
                return <div key={index}>
                  <li className="bg-[#232329] py-6 px-6 sm:px-8 rounded-xl flex flex-col justify-start items-center lg:items-start gap-3 w-full">
                    <div className="w-full">
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Certificate</p>
                      <p className="text-white font-bold hover:text-green-500 text-sm">{item.name}</p>
                    </div>
                    <div className="w-full">
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Date</p>
                      <span className="text-white hover:text-green-500 text-sm">{item.date}</span>
                    </div>
                  </li>
                </div>
              })
            }
          </ul>
        </ScrollArea>

      </div>
    </TabsContent>

    </div>

</Tabs>

     </div>
    </motion.div>
  )
}

export default Resume

// 1 55 28
