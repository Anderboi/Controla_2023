import React from "react";
import Select, {
  GroupBase,
  MenuListProps,
  StylesConfig,
  components,
} from "react-select";

export interface SelectProps {
  value: string;
  label: string;
}

interface BasicMultiSelectorProps {
  aditionalButton?: React.ComponentType<
    MenuListProps<any, true, GroupBase<any>>
  >;
  content: SelectProps[];
  label?: string;
  callback: (e: any) => void;
}

const BasicMultiSelector = ({
  content,
  label,
  callback,
  aditionalButton,
}: BasicMultiSelectorProps) => {


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
        <label className="text-sm">{label}</label>
        <Select
          isMulti
          options={content}
          captureMenuScroll
          isSearchable
          onChange={(choise: any) => callback(choise)}
          styles={colourStyles}
          closeMenuOnSelect={false}
          components={{ MenuList: aditionalButton }}

          
        />
      </div>
    </>
  );
};

export default BasicMultiSelector;
