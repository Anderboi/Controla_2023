import React from "react";
import { twMerge } from 'tailwind-merge';

interface CheckDataCardProps {
  children?: React.ReactNode;
  name: string;
  value: string;
  isChecked?: boolean;
  onChange?: () => void;
  description?: string;
}

const CheckDataCard = ({
  value,
  description,
  onChange,
  isChecked,
  name,
}: CheckDataCardProps) => {
  
  return (
    <label
      htmlFor={name}
      className={twMerge(
        `
        group
        cursor-pointer
        flex
        justify-start
        items-start
        gap-4
        px-6
        py-4
        rounded-lg
        border
        border-primary-border-dark
        group:focus:border-accent-dark
        hover:bg-elevated-2-bg-dark
        focus:border-accent-dark
        
        `,
        isChecked && "border-accent-dark bg-green-100/10"
      )}
    >
      <div className="flex size-5 items-center">
        <input type='checkbox'
          onChange={onChange}
          value={value}
          name={name}
          id={name}
          checked={isChecked}
        />
      </div>
      <div className="flex flex-col">
        <p className="line-clamp-2 text-sm text-primary-text-dark">{value}</p>
        <p className="line-clamp-4 text-xs text-secondary-text-dark">
          {description}
        </p>
      </div>
    </label>
  );
};

export default CheckDataCard;
