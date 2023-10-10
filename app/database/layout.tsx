import React from "react";
import ContainerBox from "@/components/common/ContainerBox";
import Header from "@/components/feature/header/Header";
import AddDataButton from '@/components/feature/header/AddDataButton';

export const revalidate = 0;

interface DataProps {
  children: React.ReactNode;
}

const DatabasePage = ({ children }: DataProps) => {
  return (
    <>
      <Header title="База данных" adjustableButton={<AddDataButton />} />
      <ContainerBox
        className="
          relative
          flex 
          h-full
          flex-col
          overflow-y-auto
          !p-0
          no-scrollbar
          "
      >
        <div
          className="
            sticky
            left-0
            top-0
            z-10
            w-full
            bg-secondary-bg-dark/80
            p-4
            backdrop-blur-md
            "
        ></div>
        <div className="px-4 space-y-6">{children}</div>
      </ContainerBox>
    </>
  );
};

export default DatabasePage;
