import { SectionTitle } from "@/app/shared/SectionTitle"
import { backEndTechnologies, cms, mainTechnologies, other, versionCotrol } from "@/app/data/technologiesData";

export const Stack = () => {
  return (
    <section
      className="border-b border-white border-opacity-50 mb-[20px]"
      id="stack"
    >
      <SectionTitle text={'Stack'} />

      <div className="text-[22px] md:text-[26px] font-bold leading-loose text-white">
        <h3 className="text-white mb-[20px]">Main technologies:</h3>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-[40px]">
          {mainTechnologies.map(technology => (
            <li
              key={technology.name}
              className="text-[18px] md:text-[20px]
              border border-white rounded-[12px] p-[10px]
              flex flex-col items-center gap-[10px]"
            >
              <p className="text-lightBlue">{technology.name}</p>
              {technology.logo}
            </li>
          ))}
        </ul>

        <h3 className="text-white mb-[20px]">Back end:</h3>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-[40px]">
          {backEndTechnologies.map(technology => (
            <li
              key={technology.name}
              className="text-[18px] md:text-[20px]
              border border-white rounded-[12px] p-[10px]
              flex flex-col items-center gap-[10px]"
            >
              <p className="text-lightBlue">{technology.name}</p>
              {technology.logo}
            </li>
          ))}
        </ul>

        <h3 className="text-white mb-[20px]">Version control:</h3>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-[40px]">
          {versionCotrol.map(technology => (
            <li
              key={technology.name}
              className="text-[18px] md:text-[20px]
            border border-white rounded-[12px] p-[10px]
            flex flex-col items-center gap-[10px]"
            >
              <p className="text-lightBlue">{technology.name}</p>
              {technology.logo}
            </li>
          ))}
        </ul>

        <h3 className="text-white mb-[20px]">CMS:</h3>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-[40px]">
          {cms.map(technology => (
            <li
              key={technology.name}
              className="text-[18px] md:text-[20px]
              border border-white rounded-[12px] p-[10px]
              flex flex-col items-center gap-[10px]"
            >
              <p className="text-lightBlue">{technology.name}</p>
              {technology.logo}
            </li>
          ))}
        </ul>

        <h3 className="text-white mb-[20px]">Other technologies:</h3>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-[40px]">
          {other.map(technology => (
            <li
              key={technology.name}
              className="text-[18px] md:text-[20px]
              border border-white rounded-[12px] p-[10px]
              flex flex-col items-center gap-[10px]"
            >
              <p className="text-lightBlue">{technology.name}</p>
              {technology.logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}