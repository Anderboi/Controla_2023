import React from "react";
import Header from "@/components/feature/header/Header";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import SignOutBlock from './components/SignOutBlock';
import ContainerBox from '@/components/common/ContainerBox';

export const revalidate = 0;

const SettingsPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  

  return (
    <>
      <Header title="Настройки" />
      <ContainerBox className="h-full">
        <SignOutBlock />
      </ContainerBox>
    </>
  );
};

export default SettingsPage;
