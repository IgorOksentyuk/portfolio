"use client";

import { useState } from "react"
import Link from "next/link"
import { MdOutlineFileDownload } from "react-icons/md"

export const Header = () => {
  const CvUrl = 'https://portfolio-ihor-oksentiuk.vercel.app/CV_Ihor-Oksentiuk_FE-dev.pdf'
  const [isMenuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Info', link: '#info' },
    { name: 'Experience', link: '#experience' },
    { name: 'Projects', link: '#projects' },
    { name: 'Stack', link: '#stack' },
    { name: 'Contacts', link: '#contacts' },
  ]

  const toggleMenu = () => {
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
      setMenuOpen(!isMenuOpen)
    } else {
      document.body.style.overflow = "auto"
      setMenuOpen(!isMenuOpen)
    }
  }

  const downloadCV = () => {
    const cvFileName = CvUrl.split('/').pop();

    if (cvFileName) {
      const link = document.createElement('a');
      link.href = CvUrl;
      link.setAttribute("download", cvFileName);

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    }
  }

  return (
    <header className={`fixed w-full flex justify-between items-center
    max-w-screen-xl py-6 bg-dark md:border-b border-b-none border-white border-opacity-50
    text-white font-semibold z-50 text-lg
    bg-dark ${isMenuOpen ? '' : 'bg-opacity-50'}`}>
      <div
        className="under-line flex items-center gap-[10px] relative cursor-pointer ml-6"
        onClick={downloadCV}
      >
        <p>Download CV</p>
        <MdOutlineFileDownload className='w-[24px] h-[24px]' />
      </div>

      <ul className={`md:flex md:items-center absolute md:static bg-dark z-20 top-16 w-full bd-dark md:bg-transparent
        md:w-auto md:pr-0 md:pr-8 pl-8 transition-all duration-500 ease-in ${isMenuOpen ? '' : 'top-[-490px]'}`}>
        {links.map(link => (
          <li
            key={link.name}
            className="under-line cursor-pointer relative md:ml-6 md:my-0 my-6 uppercase"
          >
            <Link
              href={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="md:hidden cursor-pointer mr-6"
        onClick={toggleMenu}
      >
        {isMenuOpen
          ? <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          : <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>}
      </div>
    </header>
  )
}