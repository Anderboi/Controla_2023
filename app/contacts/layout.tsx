import React from "react";
import ContainerBox from "@/components/common/ContainerBox";
import Header from "@/components/feature/header/Header";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import SearchInput from '@/components/common/inputs/SearchInput';

export const revalidate = 0;

interface SearchProps {
  children: React.ReactNode;
}

const ContactsPage = async ({ children }: SearchProps) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      {/* //TODO: придумать решение по переносу header в layout */}
      <Header title="Контакты" />
      {/* <div
        className="
            sticky
            left-0
            top-0
            z-10
            w-full
            rounded-t-lg
            bg-secondary-bg-light/80
            dark:bg-secondary-bg-dark/80
            backdrop-blur-md
            "
      > */}
        <SearchInput
          urlRoute="/contacts"
        />
      {/* </div> */}
      <ContainerBox
        className="
          //overflow-y-auto
          relative 
          flex
          h-full
          flex-col
          gap-4
          no-scrollbar
          max-sm:!p-0
          "
      >
        {children}
      </ContainerBox>
    </>
  );
};

export default ContactsPage;
