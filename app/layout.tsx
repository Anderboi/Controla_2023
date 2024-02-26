import "./globals.css";
import { Inter, Comfortaa, IBM_Plex_Sans, Rubik } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Sidebar from "@/components/feature/sidebar/Sidebar";
import HydrationZustand from "@/providers/HydrationZustand";
import Providers from '@/providers/Providers';

const font = Rubik({
  subsets: ["cyrillic"],

  // weight: ["400", "700"],
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
    <html lang="ru" suppressHydrationWarning>
      <body
        className={twMerge(
          `flex 
          bg-primary-bg-light
          dark:bg-primary-bg-dark 
          h-[100dvh] 
          relative`,
          font.className
        )}
      >
        <HydrationZustand>
          <Providers>
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
                  bg-primary-bg-light
                  dark:bg-primary-bg-dark
                  p-2
                  no-scrollbar
                  "
            >
              {children}
            </main>
          </Providers>
        </HydrationZustand>
      </body>
    </html>
  );
}
