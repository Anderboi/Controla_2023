import React from "react";

interface InfoDataGridProps {
  children: React.ReactNode;
}

const InfoDataGrid = ({ children }: InfoDataGridProps) => {
  return (
    <div
      className="
        w-full
        
        max-sm:divide-y
        
        max-sm:border
        border-solid
        dark:border-primary-border-dark
        dark:divide-primary-border-dark

        overflow-x-auto
        no-scrollbar
        max-sm:rounded-lg
        max-sm:px-4

        sm:inline-flex
        sm:gap-4
        sm:bg-transparent
        "
    >
      {children}
    </div>
  );
};

export default InfoDataGrid;
