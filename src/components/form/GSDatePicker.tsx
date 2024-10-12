import { Controller } from "react-hook-form";

import { IInput } from "@/types";
import { DatePicker } from "@nextui-org/react";

export default function GADatePicker({
  label,
  name,
  variant = "bordered",
}: IInput) {
  return (
    <Controller
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          className="min-w-full sm:min-w-[225px]"
          label={label}
          variant={variant}
          {...fields}
        />
      )}
    />
  );
}
