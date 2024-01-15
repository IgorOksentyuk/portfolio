import { GoArrowUp } from "react-icons/go"

import { HireButton } from "../shared/HireButton"
import { solialData } from "../data/socialsData"

export const Footer = () => {
  return (
    <footer
      className="w-[100%] h-[100px] px-[24px]
      flex flex-col md:flex-row justify-between items-center gap-[40px]"
      id="contacts"
    >
      <HireButton />

      <div className="flex gap-[10px]">
        {solialData.map(social => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <a
        href="#"
        className="under-line flex relative font-bold text-[18px] text-white
        pointer"
      >
        Go up
        <GoArrowUp className="w-[26px] h-[26px]" />
      </a>
    </footer>
  )
}
