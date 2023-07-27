import React from "react";

interface Props {
  isFilled: boolean;
  label: string;
  // type: string;
  illustration: React.ReactNode;
  onClick: () => void;
}

const DataCard = ({ illustration, isFilled, label, onClick }: Props) => {
  return (
    <div
      className="
        group
        flex
        items-center
        justify-between
        gap-4
        rounded-lg
        cursor-pointer
        overflow-clip

        bg-elevated-1-bg-dark
        hover:bg-elevated-2-bg-dark
        //to-bg-elevated-1-bg-dark
        //from-accent-dark/30
        //to-15%
        //hover:bg-gradient-to-l

        px-4
        py-2
        transition-all
        "
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        {illustration}
        <div className="text-sm">{label}</div>
      </div>
      <span className="text-secondary-text-dark group-hover:text-primary-text-dark">
        {isFilled ? (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default DataCard;
