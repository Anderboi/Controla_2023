import ContainerBox from "@/components/common/ContainerBox";
import Image from "next/image";

import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import SignInBlock from "@/components/SignInBlock";

const Home = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/projects");
  }

  return (
    <ContainerBox classname="px-6 py-6 h-full w-full ">
      <div className="m-auto flex h-full max-w-[600px] flex-col justify-center gap-y-8">
        <div className="flex w-full flex-col gap-6 pb-10">
          <Image
            alt="main logo"
            src="logos/controla_logo_light.svg"
            width={300}
            height={40}
            className="w-full"
          />
          <p className="text-center">
            Project management web app for interior designers.
          </p>
        </div>
        <SignInBlock />
      </div>
    </ContainerBox>
  );
};

export default Home;
