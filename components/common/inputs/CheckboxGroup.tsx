import React, { useState } from "react";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

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
    <section className="space-x-4 px-2 flex items-center justify-start group">
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
        className="peer-checked:text-accent-dark peer-checked:line-through w-full flex gap-5 items-center"
      >
        {children}
        <div className="flex gap-1">
          <EditIcon
            className="
            h-4 
            hidden 
            group-hover:block 
            cursor-pointer 
            text-secondary-text-dark 
            hover:text-accent-dark
            "
          />
          <button onClick={onRemove}>

          <DeleteIcon
            className="
            h-4
            hidden
            group-hover:block
            cursor-pointer
            text-secondary-text-dark
            hover:text-red-600
            "
          />
          </button>
        </div>
      </label>
    </section>
  );
};

export default CheckboxGroup;
