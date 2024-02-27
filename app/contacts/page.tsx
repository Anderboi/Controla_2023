import React from "react";
import getContactsByTitle from "@/lib/actions/getContactsByTitle";
import ContactsGallary from "./_components/ContactsGallary";

export const revalidate = 0;

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const ContactsPage = async ({ searchParams }: SearchProps) => {
  const contacts = await getContactsByTitle(searchParams.title);

  return (
    <>
      <ContactsGallary contacts={contacts} />
    </>
  );
};

export default ContactsPage;
