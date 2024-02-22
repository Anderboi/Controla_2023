"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";

import useDebounce from "@/hooks/useDebounce";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };
    const url = qs.stringifyUrl({
      url: "/projects",
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      type="search"
      placeholder="Найти ..."
      value={value}
      className="text-primary-text-light dark:text-primary-text-dark"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
