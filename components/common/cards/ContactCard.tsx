'use client'

import React from "react";
import ContainerBox from "../ContainerBox";
import Image from "next/image";
import { User } from "@/types/supabase";
import AddContactButton from "@/components/feature/AddContactButton";

interface ContactCardProps {
  data: User;
  onClick: (id: string) => void;
}

const ContactCard = ({ data, onClick }: ContactCardProps) => {
  return (
    <ContainerBox
      type="card"
      classname="
              relative
              flex
              flex-col 
              justify-center 
              items-center
              gap-y-4 
              cursor-pointer 
              group
              aspect-square
              bg-elevated-1-bg-dark
              hover:bg-elevated-2-bg-dark
              "
      onClick={() => onClick(data.id)}
    >
      <AddContactButton
        id={data.id}
        className="
          absolute
          top-2
          left-3
          z-50
          "
      />

      <div className="relative w-full h-full">
        <Image
          alt="avatar"
          src={data.avatar_url || ""}
          fill
          className="rounded-full aspect-square"
        />
      </div>

      <div className="w-full items-start">
        <p className="line-clamp-2 min-h-[2lh] font-bold">{data.full_name}</p>
        <p className="text-xs truncate text-secondary-text-dark">
          {data.email}
        </p>
        <p className="text-sm ">{data.role}</p>
      </div>
    </ContainerBox>
  );
};

export default ContactCard;
