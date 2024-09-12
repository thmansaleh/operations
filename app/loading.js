'use client'

import { Spinner } from "flowbite-react"

function loading() {
  return (
    <div className="bg-white w-full h-svh flex justify-center items-center">

    <Spinner color="success" size='lg'   aria-label="Default status example" />;
</div>  )
}

export default loading