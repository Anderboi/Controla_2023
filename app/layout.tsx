import "./globals.css";
import { Inter, Comfortaa, IBM_Plex_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Sidebar from "@/components/feature/sidebar/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import HydrationZustand from "@/providers/HydrationZustand";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Comfortaa({
  subsets: ["cyrillic"],
});

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
        className={twMerge(
          `flex bg-primary-bg h-[100dvh] relative`,
          font.className
        )}
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
                  bg-primary-bg-dark
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
