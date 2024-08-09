import {  Rating } from "flowbite-react"
import { swrReportsCount } from "../swr/reportsCount"
import { useState } from "react"


function ReportsCount() {
    const { data , error, isLoading } = swrReportsCount()
  
if(isLoading) return 'loading'
  return <div className="p-6 ">
    <h2 className="my-3 " >عدد البلاغات  الحالية </h2>
    {data.map(nida=>{
        return <>
         <Rating.Advanced percentFilled={nida.report_percentage.toFixed()} className="mb-2">
        {nida.car_nida}
      </Rating.Advanced>
   
        </>
    })}
  {/* <div className="text-base font-medium dark:text-white">Small</div>
  <Progress progress={45} size="sm" color="dark" />
  <div className="text-base font-medium dark:text-white">Default</div>
  <Progress progress={45} size="md" color="dark" />
  <div className="text-lg font-medium dark:text-white">Large</div>
  <Progress progress={45} size="lg" color="dark" />
  <div className="text-lg font-medium dark:text-white">Extra Large</div>
  <Progress progress={45} size="xl" color="dark" /> */}
</div>
}

export default ReportsCount