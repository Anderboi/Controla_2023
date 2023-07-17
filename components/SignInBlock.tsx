'use client'

import useAuthModal from '@/hooks/useAuthModal';
import React from 'react'
import Button from './common/inputs/Button';

const SignInBlock = () => {
  const authModal = useAuthModal();
  return (
    <>
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
    </>
  );
}

export default SignInBlock