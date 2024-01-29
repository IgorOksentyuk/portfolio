import Image from 'next/image'
import Link from 'next/link'
import { FaGithubSquare } from "react-icons/fa"

import jobsData from '../../data/jobsData.json'
import gidLogo from '../../../assets/gid-logo.png'
import { SectionTitle } from '@/app/shared/SectionTitle'

export const Experience = () => {
  const companyLogoStyles = "w-[140px] min-w-[140px] h-[80px] mb-[40px] md:mb-[0] hover:scale-125 duration-300 ease-in-out"

  return (
    <section
      className="border-b border-white border-opacity-50"
      id="experience"
    >
      <SectionTitle text={'Work experience'} />

      <div>
        {jobsData.map((job) => (
          <div
            key={job.id}
            className="text-[22px] md:text-[26px] font-bold leading-loose text-white
            mb-[80px] px-[20px]"
          >
            <div className="flex flex-col md:flex-row justify-between gap-[40px] gap-[120px]
            max-w-[100%] md:max-w-[70%]">
              <div>
                <div className="flex gap-[14px]">
                  <p className="text-greyMain">Company:</p>
                  <p>{job.company}</p>
                </div>

                <div className="flex flex-col md:flex-row space-x-4">
                  <p className="text-greyMain">Period:</p>
                  <p>{job.start}</p>
                  <p>to</p>
                  <p>{job.end}</p>
                </div>
              </div>

              <Link
                className="transition-transform transform"
                href={job.link}
                target='blank_'
              >
                {job.logo === 'FaGithubSquare' ? (

                  <FaGithubSquare
                    className={companyLogoStyles}
                  />

                ) : job.logo === 'gidLogo' ? (

                  <Image
                    src={gidLogo}
                    alt="gid-logo"
                    className={companyLogoStyles}
                  />

                ) : null}
              </Link>
            </div>

            <ul className="list-disc">
              <p className="text-greyMain">Responsibilities:</p>

              {job.description.map(task => (
                <li
                  key={task.name}
                  className="mb-[20px]">
                  {task.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}