"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";

export const revalidate = 0;

const ContactsLiveSearch = () => {
  type User = Database["public"]["Tables"]["users"]["Row"]; // TODO: Change to contacts, if needed

  const supabaseClient = useSupabaseClient();

  const [contacts, setContacts] = useState<User[]>([]);
  const [query, setQuery] = useState("");
  const [selectedPeople, setSelectedPeople] = useState<User[]>([contacts[0], contacts[1]]);

  const filteredContacts =
    query === ""
      ? contacts
      : contacts.filter((person) =>
          person.full_name
            ?.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabaseClient.from("users").select("*");

      error && console.log(error.message);

      if (!error && data) {
        setContacts(data as []);
        // setContacts(data)
      }
      setSelectedPeople([]);
    };


    fetchData();
    
  }, [supabaseClient]);

  const handleOnChange = (value:any)=> {
    selectedPeople.includes(value)
      ? setSelectedPeople(selectedPeople.filter((item) => item !== value))
      : setSelectedPeople((oldValue) => [...oldValue, value]);
  }

  return (
    <>
      <div
        className="
        //lg:w-1/4 
        w-full
        "
      >
        <Combobox value={selectedPeople} onChange={handleOnChange}>
          <div className="relative mt-1">
            <Combobox.Label>Клиент: </Combobox.Label>
            <div
              className="
                bg-white
                focus-visible:ring-white
                relative
                w-full
                cursor-default
                overflow-hidden
                rounded-lg
                text-left
                shadow-md
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-opacity-75
                focus-visible:ring-offset-2
                focus-visible:ring-offset-teal-300
                sm:text-sm
            "
            >
              <Combobox.Input
                
                className="w-full rounded-lg border-none py-3 pl-3 pr-10 text-sm leading-5 text-primary-text-dark focus:ring-0"
                onChange={(event) => setQuery(event.target.value)}
                displayValue={
                  (selectedPeople: any) => selectedPeople
                  .map((contact:any) => contact?.full_name)
                  .join(", ")
                }
                
              />
              <Combobox.Button
                className={"absolute inset-y-0 right-0 flex items-center pr-2"}
              >
                <ChevronUpDownIcon
                  className="h-5 w-5 text-secondary-text-dark"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options
                className={`
                  ring-black
                  absolute
                  z-50
                  mt-1
                  max-h-60
                  w-full
                  overflow-auto
                  rounded-lg 
                  bg-secondary-bg-dark
                  py-1
                  text-base
                  shadow-lg
                  ring-1
                  ring-opacity-5
                  focus:outline-none
                  sm:text-sm
                  `}
              >
                {filteredContacts.length === 0 && query !== "" ? (
                  <div>Ничего не найдено</div>
                ) : (
                  filteredContacts.map((contact) => (
                    <Combobox.Option
                      key={contact.id}
                      value={contact}
                      className={({ active }) =>
                        `
                        relative 
                        cursor-default
                        select-none
                        py-2
                        pl-10
                        pr-4
                        ${
                          active
                            ? "bg-elevated-1-bg-dark"
                            : "bg-elevated-2-bg-dark"
                        }
                        `
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {contact.full_name}
                          </span>
                          {selected ? (
                            <span
                              className={`
                              absolute
                              inset-0
                              flex
                              items-center
                              pl-3
                              ${
                                active
                                  ? "text-accent-dark"
                                  : "text-secondary-text-dark"
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </>
  );
};

export default ContactsLiveSearch;
