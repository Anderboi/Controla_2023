'use client'

import Button from '@/components/common/inputs/Button';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

const SignOutBlock = () => {
  const router = useRouter();

  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged Out");
    }
  };
  return (
    <>
      <Button className='w-full' mode="ghost_accent" onClick={handleLogout}>
        Sign Out
      </Button>
    </>
  );
}

export default SignOutBlock