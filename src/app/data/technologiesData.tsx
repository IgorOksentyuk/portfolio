import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSwiper,
  SiPostman,
  SiWebpack,
  SiJirasoftware,
  SiClickup,
  SiCanva,
  SiVercel,
} from "react-icons/si"

import {
  FaReact,
  FaNode,
  FaGithubSquare,
  FaGitAlt,
  FaWordpress,
  FaNpm,
} from "react-icons/fa"

import { FaCompress, FaFigma } from "react-icons/fa6"

import { TbBrandJavascript, TbBrandBulma, TbApi, TbSql } from "react-icons/tb"
import {
  SiBem,
  SiStyledcomponents,
  SiApollographql,
  SiRedux,
  SiRecoil,
  SiReactivex,
} from "react-icons/si"
import { FaHtml5, FaCss3Alt, FaSass, FaAngular } from "react-icons/fa"

import { GiAtomicSlashes } from "react-icons/gi"

const logosSize = 'w-[80px] h-[80px]'

export const technologies = [
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
  {
    name: 'React icons',
    logo: <FaReact className="w-[50px] h-[50px]" />,
    link: 'https://react-icons.github.io/react-icons/',
  },
]


export const mainTechnologies = [
  { name: 'Javascript', logo: <TbBrandJavascript className={logosSize} /> },
  { name: 'Typescript', logo: <SiTypescript className={logosSize} /> },
  { name: 'HTML', logo: <FaHtml5 className={logosSize} /> },
  { name: 'CSS', logo: <FaCss3Alt className={logosSize} /> },
  { name: 'SASS', logo: <FaSass className={logosSize} /> },
  { name: 'BEM', logo: <SiBem className={logosSize} /> },
  { name: 'Styled Components', logo: <SiStyledcomponents className={logosSize} /> },
  { name: 'Tailwind CSS', logo: <SiTailwindcss className={logosSize} /> },
  { name: 'Bulma', logo: <TbBrandBulma className={logosSize} /> },
  { name: 'React', logo: <FaReact className={logosSize} /> },
  { name: 'Atomic design Pattern', logo: <GiAtomicSlashes className={logosSize} /> },
  { name: 'React Apollo', logo: <SiApollographql className={logosSize} /> },
  { name: 'Next.js', logo: <SiNextdotjs className={logosSize} /> },
  { name: 'Redux', logo: <SiRedux className={logosSize} /> },
  { name: 'Redux Toolkit', logo: <SiRedux className={logosSize} /> },
  { name: 'Recoil.js', logo: <SiRecoil className={logosSize} /> },
  { name: 'Angular', logo: <FaAngular className={logosSize} /> },
  { name: 'Angular Material', logo: <FaAngular className={logosSize} /> },
  { name: 'RxJS', logo: <SiReactivex className={logosSize} /> },
  { name: 'Swiper.js', logo: <SiSwiper className={logosSize} /> },
]

export const backEndTechnologies = [
  { name: 'Node.js', logo: <FaNode className={logosSize} /> },
  { name: 'SQL', logo: <TbSql className={logosSize} /> },
  { name: 'RESTful API', logo: <TbApi className={logosSize} /> },
  { name: 'Postman', logo: <SiPostman className={logosSize} /> },
]

export const versionCotrol = [
  { name: 'GIT', logo: <FaGitAlt className={logosSize} /> },
  { name: 'Github', logo: <FaGithubSquare className={logosSize} /> },
]

export const cms = [
  { name: 'Wordpress', logo: <FaWordpress className={logosSize} /> }
]

export const other = [
  { name: 'Webpack', logo: <SiWebpack className={logosSize} /> },
  { name: 'Figma', logo: <FaFigma className={logosSize} /> },
  { name: 'Jira', logo: <SiJirasoftware className={logosSize} /> },
  { name: 'ClickUp', logo: <SiClickup className={logosSize} /> },
  { name: 'Canva', logo: <SiCanva className={logosSize} /> },
  { name: 'Npm', logo: <FaNpm className={logosSize} /> },
  { name: 'Vercel', logo: <SiVercel className={logosSize} /> },
]