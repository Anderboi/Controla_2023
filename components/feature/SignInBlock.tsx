"use client";

import useAuthModal from "@/hooks/useAuthModal";
import React from "react";
import Button from "../common/inputs/Button";

const SignInBlock = () => {
  const authModal = useAuthModal();
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Авторизация</h1>
      <div className="flex justify-between gap-4">
        <Button mode="action" onClick={authModal.onOpen} className="w-full">
          Войти
        </Button>
        {/* //TODO: необхожимо заменить на signUp */}
        {/* <Button mode="ghost" onClick={handleLogout}>
            Sign Out
          </Button> */}
      </div>
    </>
  );
};

export default SignInBlock;
