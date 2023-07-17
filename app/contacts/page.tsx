import React from "react";
import ContactsSearchInput from "@/components/common/inputs/ContactsSearchInput";
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
      <ContactsSearchInput />
      <ContactsGallary contacts={contacts} />
    </>
  );
};

export default ContactsPage;
