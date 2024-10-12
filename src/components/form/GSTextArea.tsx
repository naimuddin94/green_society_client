import { useFormContext, useWatch } from "react-hook-form";

import { IInput } from "@/types";
import { Textarea } from "@nextui-org/react";

interface IProps extends IInput {
  type?: string;
}

export default function GSTextarea({
  name,
  label,
  variant = "bordered",
}: IProps) {
  const { register } = useFormContext();

  const currentValue = useWatch({ name });

  return (
    <Textarea
      {...register(name)}
      label={label}
      minRows={6}
      value={currentValue || ""}
      variant={variant}
    />
  );
}
