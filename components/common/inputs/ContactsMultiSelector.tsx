"use client";

import React, { useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { StylesConfig, components } from "react-select";
import Button from "./Button";
import BasicMultiSelector from "./BasicMultiSelector";

export const revalidate = 0;

interface SelectProps {
  value: string;
  label: string;
}

  type User = Database["public"]["Tables"]["users"]["Row"]["full_name"]; // TODO: Change to contacts, if needed


const sendOption = () => {
  console.log("send option");
};

const SelectMenuButton = (props: any) => {
  return (
    <components.MenuList {...props}>
      {props.children}
      <Button mode="ghost" className="w-full" onClick={() => sendOption()}>
        Отправить приглашение
      </Button>
    </components.MenuList>
  );
};
const Option = (props: any) => {
  return (
    <components.Option {...props}>
      <div>
        <span>{props.avatar_url}</span>
        <span>{props}</span>
      </div>
    </components.Option>
  );
};

const ContactsMultiSelector = () => {

  const supabaseClient = useSupabaseClient();

  const [contacts, setContacts] = useState<SelectProps[]>([]);
  const [query, setQuery] = useState("");
  const [selectedPeople, setSelectedPeople] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("users")
        .select("full_name");

      error && console.log(error.message);

      if (!error && data) {
        const arr: SelectProps[] = [];
        data.map((user) => {
          return arr.push({ value: user.full_name, label: user.full_name });
        });
        setContacts(arr as []);
      }
      setSelectedPeople([]);
    };
    fetchData();
  }, [supabaseClient, query]);


  const handleChange = (value: any) => {
    console.log(value);

    selectedPeople.includes(value)
      ? setSelectedPeople(selectedPeople.filter((item) => item !== value))
      : setSelectedPeople((oldValue) => [...oldValue, value]);
  };

  return (
    <>
      <BasicMultiSelector type='select'
        content={contacts}
        callback={handleChange}
        label="Клиенты"
        aditionalButton={SelectMenuButton}
        // customOption={Option} //TODO: add custom option Component
      />
    </>
  );
};

export default ContactsMultiSelector;
