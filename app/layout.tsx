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
        className={twMerge(`flex bg-primary-bg-dark h-[100dhv] relative`, inter.className)}
      >
        <HydrationZustand>
          <ToasterProvider />
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
              <Sidebar />
              <main
                className="
                  flex
                  w-full
                  flex-1
                  flex-col
                  gap-y-2
                  overflow-auto
                  scroll-smooth
                  rounded-lg
                  p-2
                  no-scrollbar
                  bg-primary-bg-dark
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
