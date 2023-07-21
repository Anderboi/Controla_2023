import React from "react";
import Select, {
  GroupBase,
  MenuListProps,
  OptionProps,
  StylesConfig,
  components,
} from "react-select";
import CreatableSelect from "react-select/creatable";

export interface SelectProps {
  value: string;
  label: string;
}

interface BasicMultiSelectorProps {
  aditionalButton?: React.ComponentType<
    MenuListProps<any, boolean, GroupBase<any>>
  >;
  customOption?: React.ComponentType<OptionProps<any, boolean, GroupBase<any>>>;
  content: SelectProps[];
  label?: string;
  callback: (e: any) => void;
  type: "creatable" | "select";
  isMulti?: boolean;
}

const BasicMultiSelector = ({
  content,
  label,
  callback,
  aditionalButton,
  customOption,
  type,
  isMulti,
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
      fontSize: "1rem",
    }),
    menuList: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#212121",
      width: "100%",
      borderRadius: "0.375rem",
      overflow: "auto",
      maxHeight: "8lv",
      overflowBlock: "visible",
      fontSize: ".75rem",
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
      top: "10px",
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
        <label className="text-xs">{label}</label>
        {type === "select" ? (
          <Select
            isMulti={isMulti}
            options={content}
            captureMenuScroll
            isSearchable
            onChange={(choise: any) => callback(choise)}
            styles={colourStyles}
            closeMenuOnSelect={false}
            components={{
              MenuList: aditionalButton,
              // Option: customOption,
            }}
          />
        ) : (
          <CreatableSelect
            isMulti={isMulti}
            options={content}
            captureMenuScroll
            isSearchable
            onChange={callback}
            styles={colourStyles}
            closeMenuOnSelect={false}
            menuPosition="absolute"
          />
        )}
      </div>
    </>
  );
};

export default BasicMultiSelector;
