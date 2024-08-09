import {  Rating } from "flowbite-react"
import { swrStreetsReportsCount } from "../swr/streetsReportsCount"
import ReportsLoading from "./ReportsLoading"


function Streets() {
    const { data , error, isLoading } = swrStreetsReportsCount()
    if(isLoading) return <ReportsLoading/>
    return <div className="p-6  w-full ">
    
    <h2 className="my-3  font-semibold" >الشوارع </h2>
    {data.map(street=>{
        return <>
         <Rating.Advanced  percentFilled={street.report_percentage} className="mb-2 ">
        {street.street_name}
      </Rating.Advanced>
   
        </>
    })}

</div>
}

export default Streets