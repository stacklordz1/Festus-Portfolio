import { Mail } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
  { icon: <FaInstagram />, url: 'https://instagram.com/yourusername', name: 'Instagram' },
  { icon: <FaXTwitter />, url: 'https://x.com/yourusername', name: 'X' },
  { icon: <Mail size={18} />, url: 'mailto:youremail@gmail.com', name: 'Email' },
  { icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/yourusername', name: 'LinkedIn' },
  { icon: <FaGithub />, url: 'https://github.com/yourusername', name: 'Github' },
]

const SocialIcon = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name} 
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="relative z-50 w-9 h-9 flex items-center justify-center rounded-xl cursor-pointer
          bg-white/10 backdrop-blur-md border border-white/20
          text-white text-lg transition-all duration-300
          hover:scale-105 hover:-translate-y-1
          hover:bg-white hover:text-black"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialIcon