import Image from 'next/image';

import jobsData from '../jobsData.json';
import jsLogo from '../../assets/js-logo.webp';
import gidLogo from '../../assets/js-logo.webp';

export default function Experience() {
  return (
    <section className="border-b border-white border-opacity-50" id="experience">
      <h2 className="text-[32px] md:text-[44px] font-bold uppercase tracking-wide text-lightBlue 
      py-[100px]">
        Work experience
      </h2>

      <div>
        {jobsData.map((job) => (
          <div
            key={job.id}
            className="text-[22px] md:text-[26px] font-bold leading-loose text-white
            max-w-[50%] mb-[60px]"
          >
            <div className="flex justify-between gap-[120px]">
              <div>
                <p className="text-lightBlue">Company: {job.company}</p>

                <div className="flex space-x-4">
                  <p className="text-lightBlue">Period:</p>
                  <p>{job.start}</p>
                  <p>-</p>
                  <p>{job.end}</p>
                </div>

                <div className="flex gap-[20px]">
                  <p className="text-lightBlue">Type:</p>
                  <p>{job.type}</p>
                </div>
              </div>

              <Image
                src={jsLogo}
                alt="js-logo"
                className="w-[140px] h-[120px]"
              />
            </div>

            <ul className="list-disc">
              <p className="text-lightBlue">Tasks:</p>

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