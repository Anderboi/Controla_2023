"use client";

import React, { useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const revalidate = 0;

const ContactsLiveSearch = () => {
  type User = Database["public"]["Tables"]["users"]["Row"];

  const supabaseClient = useSupabaseClient();
  const [contacts, setContacts] = useState<User[]>();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selection, setSelection] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabaseClient.from("users").select("*");

      error && console.log(error.message);

      if (!error && data) {
        console.log(data);
        setContacts(data as []);
        // setContacts(data)
      }
      setSelection("");
    };

    fetchData();
  }, [supabaseClient]);

  const handleMenuOpen = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e: any) => {
    if (e.target.innerText !== selection && e.target.innerText !== "") {
      setSelection(e.target.innerText);
    }
    setSearchText("");
    setAnchorEl(null);
  };

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <button onClick={handleMenuOpen}>{selection}</button>
      {renderDashboardMenu()}
      {/* {renderDashboardMenu()} */}
    </div>
    // <LiveSearch
    //   renderItem={(item: User) => <div>{item.full_name}</div>}
    //   results={contacts}
    // />
  );

  function renderDashboardMenu() {
    const displayOptions = contacts
      ?.map((item: User) => {
        if (
          item.full_name &&
          item.full_name.toLowerCase().includes(searchText.toLowerCase())
        ) {
          return item;
        }
      })
      .filter((item) => item !== undefined);

    function renderOption(value: string) {
      if (selection === value) {
        return <div>{value}</div>;
      }
      return value;
    }

    return (
      <div>
        <input type="search" placeholder='Search contact'/>
        {displayOptions?.map((item, index) => {
          return (
            <div key={index}>
              <span>{renderOption(item?.full_name as string)}</span>
            </div>
          );
        })}
      </div>
    );
  }
};

export default ContactsLiveSearch;
