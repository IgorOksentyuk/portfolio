import { SectionTitle } from "@/app/shared/SectionTitle"
import { technologies } from "@/app/data/technologiesData"

export const MadeWith = () => {
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