import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSwiper,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaCompress } from "react-icons/fa6";

import { SectionTitle } from "@/app/shared/SectionTitle"

export const MadeWith = () => {
  const technologies = [
    {
      name: 'Typescript',
      logo: <SiTypescript className="w-[50px] h-[50px]" />,
      link: 'https://www.typescriptlang.org/',
    },
    {
      name: 'React',
      logo: <FaReact className="w-[50px] h-[50px]" />,
      link: 'https://react.dev/',
    },
    {
      name: 'Next.js',
      logo: <SiNextdotjs className="w-[50px] h-[50px]" />,
      link: 'https://nextjs.org/',
    },
    {
      name: 'Tailwind',
      logo: <SiTailwindcss className="w-[50px] h-[50px]" />,
      link: 'https://tailwindcss.com/',
    },
    {
      name: 'Swiper.js',
      logo: <SiSwiper className="w-[50px] h-[50px]" />,
      link: 'https://swiperjs.com/',
    },
    {
      name: 'Squoosh',
      logo: <FaCompress className="w-[50px] h-[50px]" />,
      link: 'https://squoosh.app/',
    },
  ]

  return (
    <section className="border-b border-white border-opacity-50 mb-[20px]">
      <SectionTitle text={'Made with next technologies:'} />

      <ul className="text-[22px] md:text-[26px] font-bold leading-loose text-white
      flex justify-between items-center flex-wrap gap-[20px] mb-[30px]">
        {technologies.map(technology => (
          <li
            key={technology.name}
            className="transition-transform transform hover:scale-125 duration-300 ease-in-out"
          >
            <a
              href={technology.link}
              className="flex flex-col items-center gap-[20px]"
            >
              <p>{technology.name}</p>
              {technology.logo}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}