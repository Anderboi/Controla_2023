"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";

import useDebounce from "@/hooks/useDebounce";
import { Input } from "@/components/ui/input";
import { twMerge } from "tailwind-merge";

const SearchInput = ({
  className,
  urlRoute,
}: {
  className?: string;
  urlRoute: string;
}) => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };
    const url = qs.stringifyUrl({
      // TODO: заменить на локальный адрес и сделать общий компонент
      url:  urlRoute ,
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      type="search"
      placeholder="Найти ..."
      value={value}
      className={twMerge(
        "text-primary-text-light dark:text-primary-text-dark py-1 h-fit",
        className
      )}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
