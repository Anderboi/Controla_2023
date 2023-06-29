"use client";

import ContainerBox from "@/components/common/ContainerBox";
import Button from "@/components/common/inputs/Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const Home = () => {
  const authModal = useAuthModal();

  const router = useRouter();

  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      console.log("error");

      //  toast.error(error.message);
    }
  };

  return (
    <ContainerBox classname="px-8 py-8">
      <div className="w-[600px] m-auto h-full flex flex-col justify-center gap-y-5">
        <h1 className="text-3xl font-bold text-center">Авторизация</h1>
        <div className="flex justify-between gap-4">
          <Button mode="action" onClick={authModal.onOpen}>
            Sign In
          </Button>
          {/* //TODO: необхожимо заменить на signUp */}
          <Button mode="ghost" onClick={handleLogout}>
            Sign Out
          </Button>
        </div>
      </div>
    </ContainerBox>
  );
};

export default Home;
