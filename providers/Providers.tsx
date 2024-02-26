'use client'

import ToasterProvider from "./ToasterProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import { ThemeProviderShadcn } from './ThemeProviderShadcn';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProviderShadcn
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ToasterProvider />
      <SupabaseProvider>
        <UserProvider>
          <ModalProvider />
          {children}
        </UserProvider>
      </SupabaseProvider>
    </ThemeProviderShadcn>
  );
};

export default Providers;
