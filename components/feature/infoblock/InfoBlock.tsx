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
          w-full
          columns-2
          justify-between
          gap-y-4
          border-primary-border-dark
          py-2
          "
    >
      <span className='text-primary-text-dark text-sm'>{label}</span>
      <span className='break-words text-start text-secondary-text-dark '>{body}</span>
    </div>
  );
};

export default InfoBlock;
