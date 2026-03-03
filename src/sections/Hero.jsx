import { Clock, Download } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Avatar from '../assets/avatar.jpeg'
import Button from '../components/ui/Button'
import SocialIcon from '../components/ui/SocialIcon'

const Hero = () => {

  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  const hours = String(time.getHours()).padStart(2, '0')
  const minutes = String(time.getMinutes()).padStart(2, '0')
  const seconds = String(time.getSeconds()).padStart(2, '0')
  return (
    <div className='text-white'>
      <div>
        {/* live status */}
        <div className='flex justify-center'>
          {/* Availability */}
          <div className='flex  justify-center gap-2 border border-neutral-300 dark:border-white/10
            rounded-2xl bg-neutral-100 dark:bg-black/20 px-4 py-2 mb-6 text-sm md:text-base'>
            <span className='h-2.5 w-2.5 rounded-full bg-green-600 animate-pulse ring-2 ring-green-600/40' />
            <span>Open to Work</span>
          </div>
          {/* time */}
          <div className='flex justify-center gap-2  font-semibold text-lg'>
            <Clock className='w-5 h-5 ' />
            <span> {hours}:{minutes}:{seconds}</span>
          </div>
        </div>



        {/* profile avatar */}
        <div className=''>
          <img src={Avatar} alt="Avatar"
            className='object-cover ring-2 w-[150px] rounded-full' />
        </div>
        {/* Hero about  */}
        <div>
          <h3>Full-Stack Developer Focused on Impact</h3>
          <p>
            I combine technical expertise with creative thinking
            to build intuitive,
            high-quality software focused on performance and user experience.
          </p>
        </div>

        {/* CTA buttons */}
        <div className='flex justify-center items-center gap-6'>
          <Button>
            Hire Me
          </Button>
          <Button icon={<Download />}>
            Download CV
          </Button>
        </div>
        {/* social icons */}
        <div>
          <p>Connect with me:</p>
          <SocialIcon/>
        </div>
      </div>

    </div>
  )
}

export default Hero
