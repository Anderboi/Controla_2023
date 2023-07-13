import React from "react";

interface InfoBlockProps {
  label: string;
  body: string | React.ReactElement;
}

const InfoBlock = ({ body, label }: InfoBlockProps) => {
  return (
    <div
      className="
      grid
          columns-2
          gap-y-4
          //sm:flex-row
          justify-between
          w-full
          //border-t-[0.5px]
          border-primary-border-dark
          py-2
          "
    >
      <span className='text-primary-text-dark'>{label}</span>
      <span className='text-start break-words text-secondary-text-dark '>{body}</span>
    </div>
  );
};

export default InfoBlock;
