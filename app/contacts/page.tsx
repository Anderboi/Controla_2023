import getContacts from "@/actions/getContacts";
import ContainerBox from "@/components/common/ContainerBox";
import Header from "@/components/common/Header";
import React from "react";

export const revalidate = 0;

const ContactsPage = async () => {
  const contacts = await getContacts();

  console.log(contacts);

  return (
    <article className="flex flex-col gap-y-2 h-fit min-h-screen pb-3">
      {/* //TODO: придумать решение по переносу header в layout */}
      <Header title="Контакты" />
      <ContainerBox >
        <div>
          {contacts.map((item) => (
            <ContainerBox>
              <p>{item.full_name}</p>
              <p>{item.email}</p>
            </ContainerBox>
          ))}
        </div>
      </ContainerBox>
    </article>
  );
};

export default ContactsPage;
