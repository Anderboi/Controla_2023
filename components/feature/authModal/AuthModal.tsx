"use client";

import React from "react";
import Modal from "@/components/common/Modal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      title="Войдите в аккаунт."
      description="Авторизуйтесь чтобы продолжить"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#121212",
                brandAccent: "#1AB17B",
                inputBorderFocus: "#1AB17B",
                inputBorderHover: "#1AB17B",
              },
              borderWidths: {
                buttonBorderWidth: "0.5px",
                inputBorderWidth: "0.5px",
              },
            },
          },
        }}
        theme="dark"
        providers={["facebook", "google", "apple"]}
        magicLink
      />
    </Modal>
  );
};

export default AuthModal;
