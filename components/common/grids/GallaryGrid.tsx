import React from "react";

interface GridProps {
  children: React.ReactNode;
}

const GallaryGrid = ({ children }: GridProps) => {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-2

        sm:grid-cols-2
        sm:gap-4

        md:grid-cols-4

        xl:grid-cols-5

        2xl:grid-cols-6
      "
    >
      {children}
    </section>
  );
};

export default GallaryGrid;
