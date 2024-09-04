'use client'

import { useEffect } from "react"
import Map from "./Map"
import { getDrivingDistance } from "../services/helpers/getDrivingDistance"

function page() {
  // useEffect(() => {
  //  const data = async()=>{
  //    await getDrivingDistance(25.231365079671175, 55.335882984906874, 25.276987, 55.296249)
  //   .then(distance => console.log(`Driving distance: ${distance} km`));
  //  }
  //  data()
  // }, [])
  
  return (
    <div>
        <Map/>

    </div>
  )
}

export default page