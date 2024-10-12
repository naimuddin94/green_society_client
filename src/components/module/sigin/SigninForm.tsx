"use client";

import GSForm from "@/components/form/GSForm";
import GSInput from "@/components/form/GSInput";
import Loading from "@/components/ui/Loading";
import { useUser } from "@/context/user.provider";
import { useUserSignin } from "@/hooks/auth.hook";
import signinValidationSchema from "@/schemas/signin.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FieldValues } from "react-hook-form";

const SigninForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");

  const { setIsLoading: userLoading } = useUser();

  const { mutate: signinFn, isPending, isSuccess } = useUserSignin();

  const handleLogin = async (data: FieldValues) => {
    signinFn(data);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
      <GSForm
        className="flex flex-col gap-4"
        resolver={zodResolver(signinValidationSchema)}
        onSubmit={handleLogin}
      >
        <GSInput required label="Email" name="email" />
        <GSInput required label="Password" name="password" />
        <Button color="success" type="submit">
          Sign In
        </Button>
      </GSForm>
    </>
  );
};

export default SigninForm;
