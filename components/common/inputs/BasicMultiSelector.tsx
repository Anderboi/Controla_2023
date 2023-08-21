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
  content?: SelectProps[];
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
      backgroundColor: "#242424",
      width: "100%",
      borderRadius: "0.5rem",
      overflowY: "scroll",
      maxHeight: "10lh",
      overflowBlock: "visible",
      fontSize: "1rem",
    }),
    option: (baseStyles, { data, isFocused, isDisabled, isSelected }) => ({
      ...baseStyles,
      backgroundColor: isFocused ? "#363636" : "#242424",
      color: isFocused ? "#fff" : isSelected ? "red" : "#A3A3A3",
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
    input: (base, props) => ({
      ...base,
      color: "#fff",
      outline: 'none'
    }),
    multiValueRemove: (base) => ({
      ...base,
      backgroundColor: 'transparent',
      color: '#A3A3A3',
      
    }),
  };

  return (
    <div>
      <label className="text-sm">{label}</label>
      {type === "select" ? (
        <Select
          isMulti
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
          isMulti
          options={content}
          captureMenuScroll
          isSearchable
          onChange={(choise: any) => callback(choise)}
          styles={colourStyles}
          closeMenuOnSelect={false}
          menuPosition="absolute"
        />
      )}
    </div>
  );
};

export default BasicMultiSelector;
