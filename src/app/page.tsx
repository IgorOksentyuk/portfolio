"use client";

import Header from "./components/Header";
import Info from "./components/Info";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl mx-auto">
      <Header />

      <main className="min-h-screen w-full py-[100px] px-[20px]">
        <Info />
        <Experience />
      </main>
    </div>
  )
}
