import ContainerBox from "@/components/common/ContainerBox";
import SignInBlock from "@/components/feature/SignInBlock";

import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { MainLogo } from "@/components/common/illustrations/brand/Logo";

const Home = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/projects");
  }

  return (
    <ContainerBox className="h-full w-full p-6">
      <MainLogo type="lg" className="w-full fill-primary-text-dark sm:hidden" />
      <p className="text-center text-sm text-secondary-text-dark sm:hidden">
        Project management web app for interior designers.
      </p>
      <div className="m-auto flex h-full max-w-[600px] flex-col justify-center gap-y-4">
        <div className="flex w-full flex-col items-center gap-2 pb-10"></div>
        <SignInBlock />
      </div>
    </ContainerBox>
  );
};

export default Home;
