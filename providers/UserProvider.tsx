"use client";

import { MyUserProvider } from "@/hooks/useUser";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {

  

  return <MyUserProvider>{children}</MyUserProvider>;
};

export default UserProvider;
