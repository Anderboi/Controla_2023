"use client";

import React from "react";
import ContainerBox from "../ContainerBox";
import Image from "next/image";
import { Database } from "@/types/supabase";
import AddContactButton from "@/components/feature/AddContactButton";

interface ContactCardProps {
  data: Database["public"]["Tables"]["users"]["Row"];
  onClick: (id: string) => void;
}

const ContactCard = ({ data, onClick }: ContactCardProps) => {
  return (
    <div
      className="
        relative
        group
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        gap-y-3
        md:gap-y-4
        cursor-pointer
        sm:bg-elevated-1-bg-dark
        sm:hover:bg-elevated-2-bg-dark
        sm:rounded-lg
        sm:p-4
              "
      onClick={() => onClick(data.id)}
    >
      <AddContactButton
        id={data.id}
        className="
          absolute
          top-[-4px]
          sm:top-4
          left-1
          sm:left-6
          z-20
          "
      />

      <div
        className="
          relative
          w-full
          h-full
          overflow-hidden
          md:saturate-0
          group-hover:saturate-100
          aspect-square
          md:drop-shadow-spt
          rounded-lg
      "
      >
        <Image
          alt="avatar"
          src={data.avatar_url || ""}
          fill
          className="rounded-full aspect-square"
        />
      </div>
      <div
        className="
          flex
          flex-col
          gap-y-1
          justify-center
          items-start
          w-full
          "
      >
        <p
          className="
            line-clamp-1 
            font-bold
            "
        >
          {data.full_name}
        </p>
        <p className="
          text-xs
          truncate
          break-all
          text-secondary-text-dark
          ">
          {data.email}
        </p>
        <p className="text-sm">{data.role}</p>
      </div>
    </div>
  );
};

export default ContactCard;
