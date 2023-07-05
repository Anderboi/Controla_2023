import React from "react";

interface InfoBlockProps {
  label: string;
  body: string;
}

const InfoBlock = ({ body, label }: InfoBlockProps) => {
  return (
    <div
      className="
          flex
          flex-col
          sm:flex-row
          justify-between
          gap-y-4
          sm:items-end
          w-full
          border-t-[0.5px]
          border-primary-border-dark
          py-2
          "
    >
      <span>{label}</span>
      <span>{body}</span>
    </div>
  );
};

export default InfoBlock;
