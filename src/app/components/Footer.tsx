import { GoArrowUp } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { HireButton } from "../shared/HireButton"

export const Footer = () => {
  return (
    <footer
      className="w-[100%] h-[100px] px-[24px]
      flex flex-col md:flex-row justify-between items-center gap-[40px]"
      id="contacts"
    >
      <HireButton />

      <div className="flex gap-[10px]">
        <a
          href="https://www.linkedin.com/in/ihor-oksentiuk-914182238/"
          target="_blank"
        >
          <FaLinkedin
            className="w-[40px] h-[40px] hover:fill-lightBlue transition-fill duration-300  "
            fill="#fff"
          />
        </a>

        <a
          href="https://t.me/igor_oksentyuk"
          target="_blank"
        >
          <PiTelegramLogoLight
            className="w-[40px] h-[40px] hover:fill-lightBlue transition-fill duration-300  "
            fill="#fff"
          />
        </a>

        <a
          href="mailto:ihor.oksentiuk@gmail.com"
          target="_blank"
        >
          <SiGmail
            className="w-[40px] h-[40px] hover:fill-lightBlue transition-fill duration-300  "
            fill="#fff"
          />
        </a>

        <a
          href="https://github.com/IgorOksentyuk"
          target="_blank"
        >
          <FaGithubSquare
            className="w-[40px] h-[40px] hover:fill-lightBlue transition-fill duration-300  "
            fill="#fff"
          />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100017195587584"
          target="_blank"
        >
          <FaFacebook
            className="w-[40px] h-[40px] hover:fill-lightBlue transition-fill duration-300  "
            fill="#fff"
          />
        </a>
      </div>

      <a
        href="#"
        className="unde-line flex relative font-bold text-[18px] text-white
        pointer"
      >
        Go up
        <GoArrowUp className="w-[26px] h-[26px]" />
      </a>
    </footer>
  )
}
