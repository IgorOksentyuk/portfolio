import { FaLinkedin, FaGithubSquare, FaFacebook } from "react-icons/fa"
import { PiTelegramLogoLight } from "react-icons/pi"
import { SiGmail } from "react-icons/si"

const iconStyles = 'w-[30px] h-[30px] hover:fill-lightBlue transition-fill duration-300'

export const solialData = [
  {
    name: 'linkedin',
    icon: <FaLinkedin className={iconStyles} fill="#fff" />,
    link: 'https://www.linkedin.com/in/ihor-oksentiuk-914182238/',
  },
  {
    name: 'telegram',
    icon: <PiTelegramLogoLight className={iconStyles} fill="#fff" />,
    link: 'https://t.me/igor_oksentyuk',
  },
  {
    name: 'gmail',
    icon: <SiGmail className={iconStyles} fill="#fff" />,
    link: 'mailto:ihor.oksentiuk@gmail.com',
  },
  {
    name: 'github',
    icon: <FaGithubSquare className={iconStyles} fill="#fff" />,
    link: 'https://github.com/IgorOksentyuk',
  },
  {
    name: 'facebook',
    icon: <FaFacebook className={iconStyles} fill="#fff" />,
    link: 'https://www.facebook.com/profile.php?id=100017195587584',
  },
]