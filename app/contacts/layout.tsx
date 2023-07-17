import React from "react";
import ContainerBox from "@/components/common/ContainerBox";
import Header from "@/components/feature/header/Header";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export const revalidate = 0;

interface SearchProps {
  children: React.ReactNode
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
        classname="
        h-full
        overflow-y-auto 
        no-scrollbar
        flex
        flex-col
        gap-y-6
        "
      >
        {children}
      </ContainerBox>
    </>
  );
};

export default ContactsPage;
