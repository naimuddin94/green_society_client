import { useFormContext } from "react-hook-form";

import { IInput } from "@/types";
import { Select, SelectItem } from "@nextui-org/react";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
}

export default function GSSelect({
  options,
  name,
  label,
  variant = "bordered",
  disabled,
}: IProps) {
  const { register } = useFormContext();

  return (
    <Select
      {...register(name)}
      className="min-w-full sm:min-w-[225px]"
      isDisabled={disabled}
      label={label}
      variant={variant}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}
