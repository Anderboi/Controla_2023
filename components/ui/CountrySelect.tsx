import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import * as RPNInput from "react-phone-number-input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { CountrySelectProps, FlagComponent } from "./phoneNumberInput";

export const CountrySelect = ({
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
            <div className="bg-foreground/20 rounded-sm flex w-6 h-4">
              {value && <FlagComponent country={value} countryName={value} />}
            </div>
          </span>
          <ChevronsUpDown className={`h-4 w-4 ${disabled ? "hidden" : ""}`} />
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
                    className={"text-sm gap-2"}
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
                      className={`ml-auto h-4 w-4 ${
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