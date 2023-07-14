"use client";

import React, { useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import Select, { StylesConfig, components } from "react-select";
import Button from "./Button";
import getContactsByTitle from '@/actions/getContactsByTitle';

export const revalidate = 0;

interface SelectProps {
  value: string;
  label: string;
}

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

const ContactsMultiSelector = () => {
  type User = Database["public"]["Tables"]["users"]["Row"]["full_name"]; // TODO: Change to contacts, if needed

  const supabaseClient = useSupabaseClient();

  const [contacts, setContacts] = useState<SelectProps[]>([]);
  const [query, setQuery] = useState("");
  const [selectedPeople, setSelectedPeople] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("users")
        .select("full_name")

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

  const colourStyles: StylesConfig<any, true> = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#363636",
      color: "#fff",
      borderRadius: "0.375rem",
      padding: "1px 0",
      borderColor: "transparent",
      outlineColor: state.isFocused ? "green" : "grey",
    }),
    menuList: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#212121",
      width: "100%",
      borderRadius: "0.375rem",
      overflow: "auto",
      maxHeight: "8lv",
    }),
    option: (baseStyles, { data, isFocused, isDisabled, isSelected }) => ({
      ...baseStyles,
      backgroundColor: isFocused ? "#242424" : "#181818",
      color: isFocused ? "#fff" : isSelected ? "red" : "#A3A3A3",
    }),
    multiValue: (baseStyles, { data, isFocused, isDisabled }) => ({
      ...baseStyles,
      backgroundColor: "#666666",
      color: "#fff",
      borderRadius: "8px",
      padding: "4px 8px",
    }),
    multiValueLabel: (base, props) => ({
      ...base,
      color: "#fff",
    }),
    input: (base, props) => ({
      ...base,
      color: "#fff",
    }),
  };


  return (
    <>
      <div
        className="
        w-full
        "
      >
        <label className="text-sm">Клиент</label>
        <Select
          isMulti
          options={contacts}
          styles={colourStyles}
          closeMenuOnSelect={false}
          components={{ MenuList: SelectMenuButton }}
        />
      </div>
    </>
  );
};

export default ContactsMultiSelector;
