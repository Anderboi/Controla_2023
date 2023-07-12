import React from "react";

interface InfoBlockProps {
  label: string;
  body: string | React.ReactElement;
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
          w-full
          //border-t-[0.5px]
          border-primary-border-dark
          py-2
          "
    >
      <span className='text-primary-text-dark flex-1'>{label}</span>
      <span className='text-start break-words text-secondary-text-dark flex-1 text-sm'>{body}</span>
    </div>
  );
};

export default InfoBlock;
