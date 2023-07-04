"use client";

import ContactCard from "@/components/common/cards/ContactCard";
import Button from "@/components/common/inputs/Button";
import { User } from "@/types/supabase";
import React from "react";

interface ContactsGalleryProps {
  contacts: any[];
}

const ContactsGallary = ({ contacts }: ContactsGalleryProps) => {
  console.log(contacts);

  if (contacts.length === 0) {
    return (
      <article
        className="
        flex
        flex-col
        h-full
        items-center
        justify-center
        max-w-sm 
        m-auto 
        gap-6
        "
      >
        <h1>У вас нет контактов.</h1>
        <Button mode="action">Пригласить</Button>
      </article>
    );
  }

  return (
    <div
      className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          2xl:grid-cols-5
          gap-3
          h-[fill]
          "
    >
      {contacts.map((item) => (
        <ContactCard 
          key={item.id}
          data={item} 
          onClick={() => {}} />
      ))}
    </div>
  );
};

export default ContactsGallary;
