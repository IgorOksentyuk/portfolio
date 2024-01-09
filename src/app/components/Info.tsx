import myPhoto from '../../assets/my-photo.png';
import Image from "next/image";

export default function Info() {
  const openTelegram = () => {
    window.open('https://t.me/igor_oksentyuk', '_blank')
  }

  return (
    <section id="info" className="border-b border-white border-opacity-50 py-[100px]">
      <div className="text-white flex flex-col md:grid md:grid-cols-6 md:grid-rows-2">
        <h1
          className="z-10 text-[40px] md:text-[60px] font-bold tracking-wide text-center md:text-left 
          col-start-1 col-end-5 row-start-1 row-end-2
          mb-[40px] md:mb-0 animate-trans-left"
        >
          Hello! I&apos;m Ihor Oksentiuk.<br />
          A Front-End Developer.<br />
          <span className="text-lightBlue">based Ukraine, Odesa.</span><br />
        </h1>

        <Image
          className="col-start-4 col-end-7 row-start-1 row-end-3
          mb-[40px] md:mb-0
          animate-trans-right"
          src={myPhoto}
          alt="my-photo"
        />

        <div className="flex flex-col justify-between items-center md:items-start col-start-1 col-end-4 
        text-[23px] text-lightBlue animate-trans-left">
          <p className="leading-[150%] mb-[60px] md:mb-0">
            I am likely one of the most enthusiastic front-end developers you&apos;ll ever collaborate with.
            If you have an exciting project that requires exceptional skills, I&apos;m the perfect fit for the job.
          </p>

          <button
            className="text-[30px] text-white
            w-[300px] h-[80px] border border-solid border-white
            transition-bg transition-text duration-300 hover:bg-white hover:text-dark"
            onClick={openTelegram}
          >
            Hire me!
          </button>
        </div>
      </div>
    </section>
  )
}