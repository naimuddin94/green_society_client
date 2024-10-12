"use client";

import { useFormContext } from "react-hook-form";
import { IInput } from "@/types";
import { Input } from "@nextui-org/react";

export default function GSInput({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: IInput) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name]?.message as string) : ""}
      isInvalid={!!errors[name]}
      isRequired={required}
      label={label}
      size={size}
      type={type}
      variant={variant}
    />
  );
}
