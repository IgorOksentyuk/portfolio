import React from "react";

type Props = {
  text: string;
}

export const SectionTitle: React.FC<Props> = ({ text }) => {
  return (
    <h2 className="text-[24px] md:text-[34px] font-bold uppercase tracking-wide text-greyMain 
    py-[70px] text-center md:text-left">
      {text}
    </h2>
  )
}
