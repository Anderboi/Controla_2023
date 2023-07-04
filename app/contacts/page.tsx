import React from "react";
import ContainerBox from "@/components/common/ContainerBox";
import Header from "@/components/common/Header";
import ContactsSearchInput from "@/components/common/inputs/ContactsSearchInput";
import getContactsByTitle from "@/actions/getContactsByTitle";
import ContactsGallary from "./components/ContactsGallary";
import getContacts from '@/actions/getContacts';

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
      {/* //TODO: придумать решение по переносу header в layout */}
      <Header title="Контакты" />
      <ContainerBox
        classname="
        h-full
        overflow-y-auto 
        no-scrollbar
        flex
        flex-col
        gap-y-4
        "
      >
        <ContactsSearchInput />
        <ContactsGallary contacts={contacts} />
      </ContainerBox>
    </>
  );
};

export default ContactsPage;
