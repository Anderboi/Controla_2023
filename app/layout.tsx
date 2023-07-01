import "./globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Sidebar from "@/components/feature/sidebar/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import HydrationZustand from "@/providers/HydrationZustand";
import ToasterProvider from "@/providers/ToasterProvider";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Controla",
  description: "App for your projects control",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={twMerge(`flex bg-black h-full relative`, inter.className)}
      >
        <HydrationZustand>
          <ToasterProvider />
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
              <Sidebar />
              <main
                className="
                flex-1
                min-h-screen
                bg-black
                px-2
                py-2
                rounded-lg
                h-screen
                "
              >
                {/* //TODO: style main component instead */}
                <div className="
                  flex 
                  flex-col 
                  gap-y-2 
                  h-fit 
                  min-h-screen
                ">
                  {children}
                </div>
              </main>
            </UserProvider>
          </SupabaseProvider>
        </HydrationZustand>
      </body>
    </html>
  );
}
