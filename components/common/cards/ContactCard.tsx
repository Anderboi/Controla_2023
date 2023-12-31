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
        cursor-pointer
        flex-col
        items-center
        justify-center
        overflow-hidden
        sm:gap-y-3
        sm:rounded-lg
        sm:bg-elevated-1-bg-dark
        sm:p-4
        sm:hover:bg-elevated-2-bg-dark
        md:gap-y-4
              "
      onClick={() => onClick(data.id)}
    >
      <AddContactButton
        id={data.id}
        className="
          absolute
          left-1
          top-[-4px]
          sm:left-3
          sm:top-2
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
          group-hover:saturate-100
          md:drop-shadow-spt
          md:saturate-0
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
            p-4
            sm:p-0
            "
        />
      </div>
      <div
        className="
          flex
          w-full
          flex-col
          items-center
          justify-center
          gap-y-1
          "
      >
        <p
          className="
            line-clamp-1 
            font-semibold
            "
        >
          {data.full_name}
        </p>
        <p className="text-sm font-thin">{data.role}</p>
        {/* <p
          className="
          truncate
          break-all
          text-xs
          text-secondary-text-dark
          "
        >
          {data.email}
        </p> */}
      </div>
    </div>
  );
};

export default ContactCard;
