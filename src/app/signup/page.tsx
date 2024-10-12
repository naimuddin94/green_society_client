import SignupForm from "@/components/module/signup/SignupForm";
import Loading from "@/components/ui/Loading";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Link from "next/link";
import { Suspense } from "react";

export default function SignupPage() {
  return (
    <div className="flex items-center min-h-screen justify-center  bg-gradient-to-br from-green-800 to-teal-700 py-10">
      <Card className="w-full max-w-md p-5">
        <CardHeader className="flex flex-col gap-1 items-center">
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <p className="text-sm text-default-500">
            Please enter your details to sign up
          </p>
        </CardHeader>
        <CardBody>
          <Suspense fallback={<Loading />}>
            <SignupForm />
          </Suspense>
        </CardBody>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-default-500">
            Already have an account?{" "}
            <Link className="text-blue-500" href="/signin">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
