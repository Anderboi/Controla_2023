import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isLoading?: boolean;
  id: string;
  placeholder?: string;
}
const Input = ({ isLoading, label, id, placeholder, className }: InputProps) => {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <label
          className="text-md font-bold leading-5 text-primary-text-dark"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        maxLength={32}
        id={id}
        disabled={isLoading}
        placeholder={placeholder}
        className={twMerge(
          `border-[0.5px] border-elevated-2-bg-dark bg-elevated-1-bg-dark py-3 px-3 focus:ring-1 sm:text-sm placeholder:text-sm m-0`,
          className
        )}
      />
      {/* <small
            className={twMerge(
              "opacity-0",
              errors.address_country && "text-xs text-red-500 opacity-100"
            )}
          >
            {"Country is required"}
          </small> */}
    </div>
  );
};

export default Input;
