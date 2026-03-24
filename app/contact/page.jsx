"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

import {motion} from "framer-motion"
import { useState } from "react"

const info = [
  {
    icon: <FaPhoneAlt/>,
    title:"Phone",
    description: "+91 6307919337"
  },
  {
    icon: <FaEnvelope/>,
    title:"Email",
    description: "surajdwivedi644@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt/>,
    title:"Address",
    description: "Lucknow, Uttar-Pradesh, 212655"
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.firstName || !formData.email || !formData.service || !formData.message) {
      setSubmitStatus("Please fill in all required fields")
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("Message sent successfully! I'll get back to you soon.")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        })
        setTimeout(() => setSubmitStatus(""), 5000)
      } else {
        setSubmitStatus("Error sending message. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("Error sending message. Please try again.")
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section initial = {{opacity:0}}
    animate={{
      opacity:1,
      transition:{delay:0.5, duration: 0.2, ease:"easeInOut"},
    }}
      className="py-6"
    >
      
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's Work together</h3>
              <p className="text-white/60">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quae quibusdam temporibus. Quod, officiis reiciendis.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  name="firstName"
                  placeholder="Firstname"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  type="text" 
                  name="lastName"
                  placeholder="Lastname"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

                <Select value={formData.service} onValueChange={handleServiceChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service"/>
                  </SelectTrigger>
                 
                      <SelectContent>
                      <SelectGroup>
                    <SelectLabel className="bg-black text-white">Select a service</SelectLabel>
                    <SelectItem className="bg-black text-white" value="Web Development">Web Development</SelectItem>
                    <SelectItem className="bg-black text-white" value="Front-end">Front-end</SelectItem>
                    <SelectItem className="bg-black text-white" value="Back-end">Back-end</SelectItem>
                    <SelectItem className="bg-black text-white" value="DevOps & CI/CD">DevOps & CI/CD</SelectItem>
                    <SelectItem className="bg-black text-white" value="AWS (Cloud)">AWS (Cloud)</SelectItem>
                  </SelectGroup>
                      </SelectContent>

                </Select>

                <Textarea
                placeholder="Type your message here..."
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="h-[200px] bg-primary text-accent"
                required
                />

                {submitStatus && (
                  <p className={`text-sm ${submitStatus.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                    {submitStatus}
                  </p>
                )}

                <Button 
                  type="submit" 
                  disabled={loading}
                  size="md" 
                  className="max-w-40 px-10 py-2 bg-accent rounded-lg text-black hover:bg-white transition-all"
                >
                  {loading ? "Sending..." : "Send message"}
                </Button>

            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-0">
            <ul className="flex flex-col gap-10">
              {
                info.map((item, index) => {
                  return <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contact
