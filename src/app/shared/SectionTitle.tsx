import React from "react";

type Props = {
  text: string;
}

export const SectionTitle: React.FC<Props> = ({ text }) => {
  return (
    <h2 className="text-[32px] md:text-[44px] font-bold uppercase tracking-wide text-lightBlue 
    py-[100px] text-center md:text-left">
      {text}
    </h2>
  )
}
