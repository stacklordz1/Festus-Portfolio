import { Clock, Download } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Avatar from '../assets/avatar.jpeg'
import Button from '../components/ui/Button'
import SocialIcon from '../components/ui/SocialIcon'

const Hero = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const hours = String(time.getHours()).padStart(2, '0')
  const minutes = String(time.getMinutes()).padStart(2, '0')
  const seconds = String(time.getSeconds()).padStart(2, '0')

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white px-6 text-center pt-36 gap-6">
      
      {/* Live status */}
      <div className="flex flex-row items-center gap-8 mb-6">
        {/* Availability */}
        <div className="flex items-center justify-center gap-2 border border-neutral-300 dark:border-white/10 
        rounded-full bg-neutral-100 dark:bg-black/20 px-4 py-2 text-sm md:text-base">
          <span className="h-2.5 w-2.5 rounded-full bg-green-600 animate-pulse ring-2 ring-green-600/40" />
          <span>Open to Work</span>
        </div>

        {/* Live time */}
        <div className="flex justify-center gap-2 items-center font-semibold text-lg">
          <Clock className="w-5 h-5" />
          <span>{hours}:{minutes}:{seconds}</span>
        </div>
      </div>

      {/* Avatar */}
      <img 
        src={Avatar} 
        alt="Avatar" 
        className="w-[150px] h-[150px] object-cover mb-4 rounded-full ring-2" 
      />

      {/* Hero about */}
      <div className="max-w-xl">
        <h3 className="text-2xl font-bold mb-2">Full-Stack Developer Focused on Impact</h3>
        <p>
          I combine technical expertise with creative thinking to build intuitive,
          high-quality software focused on performance and user experience.
        </p>
      </div>

      {/* CTA buttons */}
      <div className="flex justify-center items-center gap-6 mb-4">
        <Button>Hire Me</Button>
        <Button icon={<Download />}>Download CV</Button>
      </div>

      {/* Social icons */}
      <div className="flex flex-col justify-center items-center pb-10 ">
        <p className='mb-4'>Connect with me:</p>
        <SocialIcon />
      </div>

    </section>
  )
}

export default Hero