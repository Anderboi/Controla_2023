import { CheckIcon, ChevronsUpDown } from "lucide-react";

import * as React from "react";

import * as RPNInput from "react-phone-number-input";
import * as RPNInputSimple from "react-phone-number-input/input";

import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";

import { Input, InputProps } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";

export type PhoneInputValue = RPNInput.Value;

type PhoneInputSimpleProps = React.ComponentProps<
  typeof RPNInputSimple.default
>;

const PhoneInputSimple = ({
  className,
  children,
  ...props
}: PhoneInputSimpleProps) => (
  <RPNInputSimple.default
    placeholder="Введите номер телефона"
    inputComponent={Input}
    {...props}
  />
);
PhoneInputSimple.displayName = "PhoneInputSimple";

type PhoneInputProps = React.ComponentProps<typeof RPNInput.default>;

const PhoneInput = ({ className, children, ...props }: PhoneInputProps) => (
  <RPNInput.default
    className={cn("flex", className)}
    placeholder={"Enter a phone number"}
    flagComponent={FlagComponent}
    countrySelectComponent={CountrySelect}
    inputComponent={InputComponent}
    {...props}
  />
);

PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <Input
      className={cn("rounded-s-none rounded-e-lg", className)}
      {...props}
      ref={ref}
    />
  )
);

type CountrySelectOption = { label: string; value: RPNInput.Country };

export type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: CountrySelectOption[];
};

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = React.useCallback(
    (country: RPNInput.Country) => {
      onChange(country);
    },
    [onChange]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant={"outline"}
          className={cn("rounded-e-none rounded-s-lg pl-3 pr-1 flex gap-1")}
          disabled={disabled}
        >
          <span className="flex items-center truncate">
            <div className="bg-foreground/20 flex h-4 w-6 rounded-sm">
              {value && <FlagComponent country={value} countryName={value} />}
            </div>
          </span>
          <ChevronsUpDown className={`size-4 ${disabled ? "hidden" : ""}`} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search country..." />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {options
                .filter((x) => x.value)
                .map((option) => (
                  <CommandItem
                    className={"gap-2 text-sm"}
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <FlagComponent
                      country={option.value}
                      countryName={option.label}
                    />
                    <span>{option.label}</span>
                    <span className="text-foreground/50">
                      {`+${RPNInput.getCountryCallingCode(option.value)}`}
                    </span>
                    <CheckIcon
                      className={`ml-auto size-4 ${
                        option.value === value ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span
      className={"inline h-4 w-6 overflow-hidden rounded-sm object-contain"}
    >
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput, PhoneInputSimple };
