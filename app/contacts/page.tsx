import React from "react";
import Image from "next/image";
import getContacts from "@/actions/getContacts";
import ContainerBox from "@/components/common/ContainerBox";
import Header from "@/components/common/Header";
import ContactsSearchInput from "@/components/common/inputs/ContactsSearchInput";
import getContactsByTitle from "@/actions/getContactsByTitle";

export const revalidate = 0;

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const ContactsPage = async ({ searchParams }: SearchProps) => {
  const contacts = await getContactsByTitle(searchParams.title);

  console.log(contacts);

  return (
    <>
      {/* //TODO: придумать решение по переносу header в layout */}
      <Header title="Контакты" />
      <ContainerBox
        classname="
        h-full
        flex
        flex-col
        gap-y-4
        "
      >
        <ContactsSearchInput />
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-3
          md:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-3
          h-fill
          "
        >
          {contacts.map((item) => (
            <ContainerBox
              type="card"
              classname="
              flex
              flex-col 
              justify-center 
              items-center
              gap-y-4 
              cursor-pointer 
              group
              aspect-square
              hover:bg-transparent-bg-dark/20
              "
            >
              <div className="relative w-full h-full">
                <Image
                  alt="avatar"
                  src={item.avatar_url || ""}
                  fill
                  className="rounded-full aspect-square"
                />
              </div>

              <div className="w-full items-start">
                <p className="line-clamp-2 min-h-[2lh] font-bold">{item.full_name}</p>
                <p className="text-xs truncate text-secondary-text-dark">
                  {item.email}
                </p>
                <p className="text-sm ">{item.role}</p>
              </div>
            </ContainerBox>
          ))}
        </div>
      </ContainerBox>
    </>
  );
};

export default ContactsPage;
