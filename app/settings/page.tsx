import React from "react";
import Header from "@/components/feature/header/Header";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

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
      <div>SettingsPage</div>
    </>
  );
};

export default SettingsPage;
