'use client'

import { useEffect } from "react"
import Map from "./Map"
import { getDrivingDistance } from "../services/helpers/getDrivingDistance"
import ReportModl from "./ReportModal"
import Filter from "./filter/Filter"
import ReportDetailsModal from "./ReportDetailsModal"

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
      {/* <ReportModl/> */}
      <ReportDetailsModal/>
      <Filter/>
        <Map/>

    </div>
  )
}

export default page