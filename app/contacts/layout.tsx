import React from "react";
import ContainerBox from "@/components/common/ContainerBox";
import Header from "@/components/feature/header/Header";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import ContactsSearchInput from "@/components/common/inputs/ContactsSearchInput";

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
      <ContainerBox
        className="
          relative
          h-full
          overflow-y-auto 
          no-scrollbar
          flex
          flex-col
          //gap-y-6
          !p-0
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
        >
          <ContactsSearchInput
            className="
              z-10
              opacity-70
              "
          />
        </div>
        <div className="px-4">{children}</div>
      </ContainerBox>
    </>
  );
};

export default ContactsPage;
