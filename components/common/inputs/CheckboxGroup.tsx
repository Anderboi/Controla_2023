import React from "react";

interface CheckboxGroupProps {
  children: React.ReactNode;
  name: string;
}

const CheckboxGroup = ({ children, name }: CheckboxGroupProps) => {
  return (
    <section className="space-x-4 px-2 flex items-center justify-start">
      <input type="checkbox" name={name} id={name} className="peer" />
      <label
        htmlFor={name}
        className="peer-checked:text-accent-dark peer-checked:line-through"
      >
        {children}
      </label>
    </section>
  );
};

export default CheckboxGroup;
