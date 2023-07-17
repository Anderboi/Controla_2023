"use client";

import ContainerBox from "@/components/common/ContainerBox";
import Button from "@/components/common/inputs/Button";
import Image from "next/image";

import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const Home = () => {
  const authModal = useAuthModal();

  // const router = useRouter();

  // const supabaseClient = useSupabaseClient();

  // const handleLogout = async () => {
  //   const { error } = await supabaseClient.auth.signOut();
  //   router.refresh();

  //   if (error) {
  //     console.log("error");

  //     //  toast.error(error.message);
  //   }
  // };

  return (
    <ContainerBox classname="px-6 py-6 h-full w-full ">
      <div className="max-w-[600px] m-auto h-full flex flex-col justify-center gap-y-8">
        <div className="w-full flex flex-col gap-6 pb-10">
          <Image
            alt="main logo"
            src="logos/controla_logo_light.svg"
            width={300}
            height={40}
            className="w-full "
          />
          <p  className='text-center'>Project management web app for interior designers.</p>
        </div>
        <h1 className="text-3xl font-bold text-center">Авторизация</h1>
        <div className="flex justify-between gap-4">
          <Button mode="action" onClick={authModal.onOpen} className="w-full">
            Sign In
          </Button>
          {/* //TODO: необхожимо заменить на signUp */}
          {/* <Button mode="ghost" onClick={handleLogout}>
            Sign Out
          </Button> */}
        </div>
      </div>
    </ContainerBox>
  );
};

export default Home;
