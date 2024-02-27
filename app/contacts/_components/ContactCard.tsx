import React from "react";
import Image from "next/image";
import AddContactButton from "@/components/feature/AddContactButton";
import { Database } from "@/types/supabase";

interface ContactCardProps {
  data: Database["public"]["Tables"]["users"]["Row"];
  onClick: (id: string) => void;
}

const ContactCard = ({ data, onClick }: ContactCardProps) => {
  return (
    <div
      className="
        group
        relative
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        cursor-pointer
        sm:gap-y-3
        rounded-lg
        sm:dark:bg-elevated-1-bg-dark
        p-4
        sm:hover:bg-elevated-2-bg-dark
        md:gap-y-4
        transition
        ease-in-out
        duration-500

        sm:border
        border-solid
        dark:border-primary-border-dark
        "
      onClick={() => onClick(data.id)}
    >
      <AddContactButton
        id={data.id}
        className="
          absolute
          left-1
          top-[-4px]
          sm:left-2
          sm:top-1
          "
      />

      <div
        className="
          relative
          aspect-square
          h-full
          w-full
          overflow-hidden
          rounded-lg
          md:dark:drop-shadow-spt
          "
      >
        <Image
          alt="avatar"
          src={data.avatar_url || ""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="
            aspect-square
            rounded-full
            sm:p-4
            sm:p-0
            "
        />
      </div>
      <div
        className="
          flex
          w-full
          flex-col
          items-start
          justify-center
          "
      >
        <p
          className="
            line-clamp-1 
            font-bold
            text-base
            "
        >
          {data.full_name}
        </p>
        <p 
        className="
        text-sm 
        font-thin 
        text-secondary-text-light
        dark:text-secondary-text-dark
        ">
          {data.role}
          </p>
        
      </div>
    </div>
  );
};

export default ContactCard;
