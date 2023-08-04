"use client";

import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Controller } from "react-hook-form";
import { StylesConfig } from "react-select";

interface OptionType {
  label: string;
  value: string;
}

const AsyncSelectContactComponent = ({
  className,
  onSubmit,
  control,
  name,
  isMultiple,
  ...props
}: {
  className?: string;
  onSubmit?: () => void;
  control: any;
  name: string;
  isMultiple?: boolean;
}) => {
  const supabaseClient = useSupabaseClient();

  const loadOptions = async (inputValue: string): Promise<OptionType[]> => {
    const { data } = await supabaseClient
      .from("users")
      .select("full_name, id")
      .ilike("full_name", `%${inputValue}%`);

    if (!data) {
      return [];
    }

    return data?.map((item) => ({
      label: item.full_name,
      value: item.id,
    }));
  };

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

  const colourStyle: StylesConfig<any, boolean> = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#303030",
      color: "#fff",
      borderRadius: "0.5rem",
      padding: "1px 0",
      borderColor: "transparent",
      outlineColor: state.isFocused ? "green" : "grey",
      fontSize: "1rem",
    }),
    menuList: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#303030",
      width: "100%",
      borderRadius: "0.5rem",
      overflowY: "scroll",
      maxHeight: "10lh",
      overflowBlock: "visible",
      fontSize: "1rem",
    }),
    option: (baseStyles, { data, isFocused, isDisabled, isSelected }) => ({
      ...baseStyles,
      backgroundColor: isFocused ? "#404040" : "#303030",
      color: isFocused ? "#fff" : isSelected ? "teal" : "#A3A3A3",
    }),
    input: (base, props) => ({
      ...base,
      color: "#fff",
      outline: "none",
      "--tw-ring-opacity": "1",
      "--tw-ring-color": "rgb(79 209 162 / var(--tw-ring-opacity))",
    }),
    multiValue: (baseStyles, { data, isFocused, isDisabled }) => ({
      ...baseStyles,
      backgroundColor: "#343434",
      color: "#fff",
      borderRadius: "8px",
      padding: "0px 8px",
      top: "10px",
      border: "1px solid #A3A3A3",
    }),
    multiValueLabel: (base, props) => ({
      ...base,
      color: "#fff",
    }),
    singleValue: (baseStyles, props) => ({
      ...baseStyles,
      color: "#fff",
    }),
    multiValueRemove: (base, props) => ({
      ...base,
      "&:hover": {
        background: "transparent",
        color: "#4FD1A2",
      },
    }),
    clearIndicator: (base, props) => ({
      ...base,
      "&:hover": {
        background: "transparent",
        color: "#4FD1A2",
      },
    }),
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <AsyncSelect
          isMulti={isMultiple}
          // {...props}
          styles={colourStyle}
          captureMenuScroll
          isSearchable
          closeMenuOnSelect={false}
          isClearable
          cacheOptions
          defaultOptions
          loadOptions={loadOptions}
          onChange={(option) => {
            isMultiple ? setSelectedOptions(option) : setSelectedOption(option);
            field.onChange(option);
          }}
          value={isMultiple ? selectedOptions : selectedOption}
          className="
          rounded-lg 
          bg-secondary-bg-dark 
          text-primary-text-light 
          outline-none
          ring-accent-dark
          focus:border-accent-dark
          focus:bg-accent-dark
          "
        />
      )}
    />
  );
};

export default AsyncSelectContactComponent;
