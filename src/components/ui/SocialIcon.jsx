import { Mail } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const socialLinks = [
  { icon: <FaInstagram />, url: '', name: 'Instagram' },
  { icon: <FaTwitter />, url: '', name: 'Twitter' },
  { icon: <Mail size={18} />, url: '', name: 'Email' },
  { icon: <FaLinkedinIn />, url: '', name: 'LinkedIn' },
  { icon: <FaGithub />, url: '', name: 'Github' },
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
          className="w-9 h-9 flex items-center justify-center rounded-xl cursor-pointer
          bg-white/10 backdrop-blur-md border border-white/20
          text-white text-lg transition-all duration-300
          hover:scale-110 hover:-translate-y-1
          hover:bg-white hover:text-black"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialIcon