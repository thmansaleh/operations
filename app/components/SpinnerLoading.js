
"use client";

import { Spinner } from "flowbite-react";

export default function SpinnerLoading() {
  return <div className="bg-white w-full h-svh flex justify-center items-center">

      <Spinner size='lg' color='warning'  aria-label="Default status example" />;
  </div>
}
