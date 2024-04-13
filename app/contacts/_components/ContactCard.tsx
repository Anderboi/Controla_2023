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
        //sm:border
        //border-solid
        group
        relative
        flex
        cursor-pointer
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-lg
        p-4
        transition
        duration-500
        ease-in-out
        dark:border-primary-border-dark
        sm:gap-y-3

        sm:hover:bg-elevated-2-bg-dark
        sm:dark:bg-elevated-1-bg-dark
        md:gap-y-4
        "
      onClick={() => onClick(data.id)}
    >
      <AddContactButton
        id={data.id}
        className="
          absolute
          left-4
          top-2
          z-10
          sm:left-2
          sm:top-0
          "
      />

      <div
        className="
          //md:dark:drop-shadow-spt
          relative
          aspect-square
          size-full
          overflow-hidden
          rounded-lg
          "
      >
        <Image
          alt="avatar"
          src={data.avatar_url || ""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="
            //sm:p-0
            aspect-square
            rounded-full
            p-4
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
            text-base
            font-bold
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
