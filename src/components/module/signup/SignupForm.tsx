"use client";

import { Button } from "@nextui-org/button";
import { Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";

import GSFileInput from "@/components/form/GSFileInput";
import GSForm from "@/components/form/GSForm";
import GSInput from "@/components/form/GSInput";
import Loading from "@/components/ui/Loading";
import { useUser } from "@/context/user.provider";
import { useUserSignup } from "@/hooks/auth.hook";

const SignupForm = () => {
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();
  const { setIsLoading: userLoading } = useUser();

  const redirect =
    typeof window !== "undefined" ? searchParams.get("redirect") : null;

  const { mutate: signupFn, isPending, isSuccess } = useUserSignup();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setImage(file);
  };

  const handleLogin = async (data: FieldValues) => {
    const formData = new FormData();
    const userData = {
      ...data,
    };

    if (image) {
      userData.image = image;
    }
    for (const item in userData) {
      formData.append(item, userData[item]);
    }

    signupFn(formData);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
      <GSForm className="flex flex-col gap-4" onSubmit={handleLogin}>
        <GSFileInput value={image && image.name} onChange={handleImageChange} />
        <GSInput required label="Name" name="name" />
        <GSInput required label="Email" name="email" />
        <GSInput
          required
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <Eye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          label="Password"
          name="password"
          type={isVisible ? "text" : "password"}
        />
        <GSInput label="Phone" name="phone" />
        <GSInput label="Address" name="address" />
        <Button color="success" type="submit">
          Sign Up
        </Button>
      </GSForm>
    </>
  );
};

export default SignupForm;
