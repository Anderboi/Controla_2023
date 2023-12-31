import React from "react";
import getContactsByTitle from "@/actions/getContactsByTitle";
import ContactsGallary from "./components/ContactsGallary";

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
