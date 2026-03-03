import { Mail } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const socialLinks = [
    { icon: <FaInstagram />, url: '', name: 'Instagram' },
    { icon: <FaTwitter />, url: '', name: 'Twitter' },
    { icon: <Mail />, url: '', name: 'Email' },
    { icon: <FaLinkedinIn />, url: '', name: 'LinkedIn' },
    { icon: <FaGithub />, url: '', name: 'Github' },
]

const SocialIcon = () => {
    return (
        <div>
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-white bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition transform hover:scale-110 shadow-lg"
                    aria-label={social.name}>
                    {social.icon}
                </a>
            ))}
        </div>
    )
}

export default SocialIcon
