import React from "react";

interface InfoDataGridProps {
  children: React.ReactNode;
}

const InfoDataGrid = ({ children }: InfoDataGridProps) => {
  return (
    <div
      className="
        w-full
        
        divide-y
        
        divide-primary-border-dark
        overflow-x-auto
        bg-elevated-1-bg-dark
        no-scrollbar
        max-sm:rounded-lg
        max-sm:px-4

        sm:inline-flex
        sm:gap-4
        sm:divide-none
        sm:bg-transparent
        "
    >
      {children}
    </div>
  );
};

export default InfoDataGrid;
