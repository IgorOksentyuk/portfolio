import React, { useState } from 'react'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/swiper-bundle.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

import { projects } from '@/app/data/projectsData'
import { SectionTitle } from "@/app/shared/SectionTitle"
import "./styles.css"

export const Projects = () => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true)
  const [isNextDisabled, setIsNextDisabled] = useState(false)

  const handlePrevDisabled = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget.classList.contains('swiper-button-disabled')) {
      setIsPrevDisabled(true)
      setIsNextDisabled(false)
    } else {
      setIsPrevDisabled(false)
      setIsNextDisabled(false)
    }
  }

  const handleNextDisabled = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget.classList.contains('swiper-button-disabled')) {
      setIsNextDisabled(true)
      setIsPrevDisabled(false)
    } else {
      setIsNextDisabled(false)
      setIsPrevDisabled(false)
    }
  }

  return (
    <section className="border-b border-white border-opacity-50 mb-[20px] pb-[70px]">
      <SectionTitle text={"Projects"} />

      <div className="flex justify-end gap-[20px] mb-[40px]">
        <div
          className="w-[50px] h-[50px] flex justify-center items-center border border-white cursor-pointer"
          id="prevBtnId"
          onClick={event => handlePrevDisabled(event)}
        >
          <IoIosArrowBack
            className={`w-[30px] h-[30px] ${isPrevDisabled ? 'fill-grey' : 'fill-white'}`}
          />
        </div>

        <div
          className="w-[50px] h-[50px] flex justify-center items-center
          border border-white cursor-pointer"
          id="nextBtnId"
          onClick={event => handleNextDisabled(event)}
        >
          <IoIosArrowForward
            className={`w-[30px] h-[30px] ${isNextDisabled ? 'fill-grey' : 'fill-white'}`}
          />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}

        navigation={{
          prevEl: `#prevBtnId`,
          nextEl: `#nextBtnId`,
        }}
      >
        {projects.map(project => (
          <SwiperSlide key={project.link}>
            <div className="relative group w-[400px]
            transform transition-scale duration-300 hover:scale-110">
              <a href={project.link} target="blank_">
                <Image
                  src={project.img}
                  alt={project.alt}
                  width={400}
                  height={200}
                  className="w-[400px] h-[200px]
                  transition-opacity duration-300 group-hover:opacity-70 cursor-pointer"
                />

                <div className="absolute bottom-0 left-0 w-full h-[100px] pl-[30px] pt-[10px] pb-[20px]
                bg-dark bg-opacity-70 opacity-0 transform translate-y-[100%] transition-all duration-300
                group-hover:translate-y-0 group-hover:opacity-100 overflow-x-auto">
                  <p className="text-white">
                    {project.description}
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}