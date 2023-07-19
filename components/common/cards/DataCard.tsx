import React from "react";

interface Props {
  isFilled: boolean;
  label: string;
  type: string;
  illustration: React.ReactNode;
  onClick: (type: string) => void;
}

const DataCard = ({ illustration, isFilled, type, label, onClick }: Props) => {
  return (
    <div
      className="
        flex
        items-center
        py-2
        px-4
        gap-4
        justify-between
        group
        bg-elevated-1-bg-dark
        rounded-lg
        cursor-pointer
        transition-all
        hover:bg-elevated-2-bg-dark
        hover:bg-gradient-to-l from-accent-dark/30 to-bg-elevated-1-bg-dark to-15%
        "
      onClick={() => onClick(type)}
    >
      <div className="flex items-center gap-4">
        {illustration}
        <div className="text-xs">{label}</div>
      </div>
      <span className="text-secondary-text-dark group-hover:text-primary-text-dark">
        {isFilled ? (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
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
            className="w-6 h-6 "
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
