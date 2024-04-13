import React from "react";

const ProjectLoading = () => {
  return (
    <>
      <section
        className="
          flex
          h-screen
          w-full
          animate-pulse
          flex-col
          gap-y-2 
          "
      >
        <div
          className="
            h-10
            w-[300px]
            space-x-1
            rounded-full
            bg-elevated-2-bg-dark
            "
        ></div>
        <div
          className="
            h-[488px]
            w-full
            space-x-1
            rounded-lg
            bg-elevated-2-bg-dark
            "
        ></div>
      </section>
    </>
  );
};

export default ProjectLoading;
