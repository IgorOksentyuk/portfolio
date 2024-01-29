import { SectionTitle } from "@/app/shared/SectionTitle"
import { backEndTechnologies, cms, mainTechnologies, other, versionCotrol } from "@/app/data/technologiesData"

export const Stack = () => {
  const h3Styles = 'text-greyMain mb-[20px]'
  const ulStyles = 'grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-[40px]'

  return (
    <section
      className="border-b border-white border-opacity-50 mb-[20px]"
      id="stack"
    >
      <SectionTitle text={'Stack'} />

      <div className="text-[22px] md:text-[26px] font-bold leading-loose text-white">
        <h3 className={h3Styles}>Main technologies:</h3>

        <ul className={ulStyles}>
          {mainTechnologies.map(technology => (
            <li
              key={technology.name}
              className="text-[18px] md:text-[20px]
              border border-white rounded-[12px] p-[10px]
              flex flex-col items-center gap-[10px]"
            >
              <p>{technology.name}</p>
              {technology.logo}
            </li>
          ))}
        </ul>

        <h3 className={h3Styles}>Back end:</h3>

        <ul className={ulStyles}>
          {backEndTechnologies.map(technology => (
            <li
              key={technology.name}
              className="text-[18px] md:text-[20px]
              border border-white rounded-[12px] p-[10px]
              flex flex-col items-center gap-[10px]"
            >
              <p>{technology.name}</p>
              {technology.logo}
            </li>
          ))}
        </ul>

        <h3 className={h3Styles}>Version control:</h3>

        <ul className={ulStyles}>
          {versionCotrol.map(technology => (
            <li
              key={technology.name}
              className="text-[18px] md:text-[20px]
              border border-white rounded-[12px] p-[10px]
              flex flex-col items-center gap-[10px]"
            >
              <p>{technology.name}</p>
              {technology.logo}
            </li>
          ))}
        </ul>

        <h3 className={h3Styles}>CMS:</h3>

        <ul className={ulStyles}>
          {cms.map(technology => (
            <li
              key={technology.name}
              className="text-[18px] md:text-[20px]
              border border-white rounded-[12px] p-[10px]
              flex flex-col items-center gap-[10px]"
            >
              <p>{technology.name}</p>
              {technology.logo}
            </li>
          ))}
        </ul>

        <h3 className={h3Styles}>Other technologies:</h3>

        <ul className={ulStyles}>
          {other.map(technology => (
            <li
              key={technology.name}
              className="text-[18px] md:text-[20px]
              border border-white rounded-[12px] p-[10px]
              flex flex-col items-center gap-[10px]"
            >
              <p>{technology.name}</p>
              {technology.logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}