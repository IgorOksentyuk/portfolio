"use client";

import { Header } from "./components/Header"
import { Info } from "./components/sections/Info"
import { Experience } from "./components/sections/Experience"
import { Footer } from "./components/Footer"
import { MadeWith } from "./components/sections/MadeWith"
import { Stack } from "./components/sections/Stack"
import { Projects } from "./components/sections/Projects/Projects"

export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center max-w-screen-xl mx-auto"
      id="main"
    >
      <Header />

      <main className="min-h-screen w-full pt-[100px] px-[20px]">
        <Info />
        <Experience />
        <Projects />
        <Stack />
        <MadeWith />
      </main>

      <Footer />
    </div>
  )
}
