import "./globals.css";
import { Inter, Comfortaa } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Sidebar from "@/components/feature/sidebar/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import HydrationZustand from "@/providers/HydrationZustand";
import ToasterProvider from "@/providers/ToasterProvider";

const inter = Comfortaa({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Controla",
  description: "App for your interior design projects control",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="ru">
      <body
        className={twMerge(`flex bg-black h-screen relative`, inter.className)}
      >
        <HydrationZustand>
          <ToasterProvider />
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
              <Sidebar />
              <main
                className="
                  bg-primary-bg-dark
                  flex
                  w-full
                  flex-1
                  flex-col
                  gap-y-2
                  //overflow-auto
                  //scroll-smooth
                  rounded-lg
                  p-2
                  no-scrollbar
                "
              >
                {children}
              </main>
            </UserProvider>
          </SupabaseProvider>
        </HydrationZustand>
      </body>
    </html>
  );
}
