export const HireButton = () => {
  const openTelegram = () => {
    window.open('https://t.me/igor_oksentyuk', '_blank')
  }

  return (
    <button
      className="text-[30px] text-white font-bold tracking-wide
    w-[300px] h-[80px] border border-solid border-white
    transition-bg transition-text duration-300 hover:bg-white hover:text-dark"
      onClick={openTelegram}
    >
      Hire me!
    </button>
  )
}