import React, { useState } from "react";
import { Pencil, Trash } from 'lucide-react';

interface CheckboxGroupProps {
  children: React.ReactNode;
  name: string;
  checked?: boolean;
  taskId: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
}

const CheckboxGroup = ({
  children,
  name,
  checked,
  onChange,
  onRemove,
  taskId,
}: CheckboxGroupProps) => {
  const [state, setState] = useState(checked);

  const handleOnChange = (e: any) => {
    setState(!state);
    onChange(e);
  };

  return (
    <section className="group flex items-center justify-start space-x-4 px-2">
      <input
        type="checkbox"
        name={name}
        id={name}
        className="peer"
        checked={state}
        onChange={handleOnChange}
      />
      <label
        htmlFor={name}
        className="flex w-full items-center gap-5 peer-checked:text-accent-dark peer-checked:line-through"
      >
        {children}
        <div className="flex gap-1">
          <Pencil
            className="
            hidden 
            h-4 
            cursor-pointer 
            text-secondary-text-dark 
            hover:text-accent-dark 
            group-hover:block
            "
          />
          <button onClick={onRemove}>

          <Trash 
            className="
            hidden
            h-4
            cursor-pointer
            text-secondary-text-dark
            hover:text-red-600
            group-hover:block
            "
          />
          </button>
        </div>
      </label>
    </section>
  );
};

export default CheckboxGroup;
