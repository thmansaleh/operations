import {  Rating } from "flowbite-react"
import { swrReportsCount } from "../swr/reportsCount"
import ReportsLoading from "./ReportsLoading"


function ReportsCount() {
    const { data , error, isLoading } = swrReportsCount()
  if(isLoading) return <ReportsLoading/>
if(isLoading) return 'loading'
  return <div className="p-6  w-full">
    <h2 className="my-3 font-semibold " >الدوريات </h2>
    {data.map(nida=>{
        return <>
         <Rating.Advanced percentFilled={nida.report_percentage.toFixed()} className="mb-2">
        {nida.car_nida}
        =
        {nida.report_count
        }
      </Rating.Advanced>
   
        </>
    })}

</div>
}

export default ReportsCount