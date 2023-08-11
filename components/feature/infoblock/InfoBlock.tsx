import React from "react";

interface InfoBlockProps {
  label: string;
  children: string | React.ReactElement;
  button?:React.ReactNode
}

const InfoBlock = ({ children, label, button }: InfoBlockProps) => {
  return (
    <div>
      <span className="text-base text-primary-text-dark">{label}</span>
      <span
        className="
          w-full
          flex
          flex-col

          bg-elevated-1-bg-dark
          rounded-lg
          px-4
          "
      >
        <div
          className="
            divide-y-[.5px]
            divide-primary-border-dark
            "
        >
          {children}
        </div>
        {button}
      </span>
    </div>
  );
};

export default InfoBlock;
