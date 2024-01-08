"use client";

import Header from "./components/Header";
import myPhoto from '../assets/my-photo.png';
import Image from "next/image";

export default function Home() {
  const openTelegram = () => {
    window.open('https://t.me/igor_oksentyuk', '_blank')
  }

  return (
    <div className="relative flex flex-col items-center max-w-screen-xl mx-auto">
      <Header />

      <main className="min-h-screen w-full py-[100px] px-[20px]">
        <section id="info" className="py-[100px]">
          <div className="text-white grid grid-cols-6 grid-rows-2">
            <h1
              className="z-10 text-[40px] md:text-[60px] font-bold tracking-wide col-start-1 col-end-5
              row-start-1 row-end-2 animate-trans-left"
            >
              Hello! I'm Ihor Oksentiuk.<br />
              A Front-End Developer.<br />
              <span className="text-lightBlue">based Ukraine, Odesa.</span><br />
            </h1>

            <Image
              className="col-start-4 col-end-7 row-start-1 row-end-3 animate-trans-right"
              src={myPhoto}
              alt="my-photo"
            />

            <div className="flex flex-col justify-between col-start-1 col-end-4 text-[23px] text-lightBlue animate-trans-left">
              <p className="leading-[150%]">
                I am likely one of the most enthusiastic front-end developers you'll ever collaborate with.
                If you have an exciting project that requires exceptional skills, I'm the perfect fit for the job.
              </p>

              <button
                className="text-[30px] w-[300px] h-[80px] border border-solid border-white text-white
                transition-bg transition-text duration-300 hover:bg-white hover:text-dark"
                onClick={openTelegram}
              >
                Hire me!
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
