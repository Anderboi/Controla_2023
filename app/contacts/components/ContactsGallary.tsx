"use client";

import React from "react";
import ContactCard from "@/components/common/cards/ContactCard";
import Button from "@/components/common/inputs/Button";
import GallaryGrid from "@/components/common/GallaryGrid";

interface ContactsGalleryProps {
  contacts: any[];
}

const ContactsGallary = ({ contacts }: ContactsGalleryProps) => {
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
    <GallaryGrid>
      {contacts.map((item) => (
        <ContactCard key={item.id} data={item} onClick={() => {}} />
      ))}
    </GallaryGrid>
  );
};

export default ContactsGallary;
