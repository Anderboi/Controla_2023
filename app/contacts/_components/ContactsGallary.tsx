"use client";

import React from "react";
import ContactCard from "@/app/contacts/_components/ContactCard";
import Button from "@/components/common/inputs/MyButton";
import GallaryGrid from "@/components/common/grids/GallaryGrid";

import { Database } from "@/types/supabase";

interface ContactsGalleryProps {
  contacts: Database["public"]["Tables"]["users"]["Row"][];
}

const ContactsGallary = ({ contacts }: ContactsGalleryProps) => {
  if (contacts.length === 0) {
    return (
      <article
        className="
        m-auto
        flex
        h-full
        max-w-sm
        flex-col
        items-center 
        justify-center 
        gap-6
        "
      >
        <h1>У вас нет контактов.</h1>
        <Button mode="action">Пригласить (не работает)</Button>
      </article>
    );
  }

  return (
    <GallaryGrid>
      {contacts.map((item) => (
        <ContactCard
          key={item.id}
          data={item}
          onClick={() => {
            console.log("hi");
          }}
        />
      ))}
    </GallaryGrid>
  );
};

export default ContactsGallary;
