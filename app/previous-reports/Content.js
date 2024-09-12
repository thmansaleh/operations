
'use client'
import { Button, Datepicker, Spinner } from "flowbite-react";
// import { useSearchParams } from "next/navigation";
import { useState } from "react";
// import BackArrowBtn from "@/app/components/BackArrowBtn";
import Table from "./Table";
import { getReportBetweenDates } from "../services/getReportsBetweenDates";

export default function Content() {
  const [driverReports,setDriverReports]=useState(false)
  const [loading,setLoading]=useState(false)
  const [massage,setMassage]=useState('')
  const [start,setStart]=useState(false)
  const [end,setEnd]=useState(false)


  const getReprts= async()=>{
    if( !start || !end) {
      setMassage('يرجئ اختيار التاريخ')
      return null
    }

    setLoading(true)
   const data= await getReportBetweenDates(start,end)
   setLoading(false)

  if(data.length>0) {
    console.log('from sknkf',data)
    setDriverReports(data)
    // console.log(JSON.parse(data.reports))
    setMassage('')

  }else{
    setDriverReports(false)
    setMassage('لاتوجد احداث')

  }
}
  return <>
  {/* <BackArrowBtn/> */}
<h2 className="text-center  text-gray-700 font-semibold text-md my-4">الأحداث</h2>
  <div className="p-3 flex flex-col gap-y-4  ">
    <div className="flex items-center gap-x-4 justify-center">
      <div>من</div>
      <Datepicker                 onSelectedDateChanged={date=>setStart(date)}
 language="en" labelTodayButton="اليوم" labelClearButton="حذف" />

    </div>
    <div className="flex items-center gap-x-4 justify-center ">
      <div>الئ</div>
      <Datepicker onSelectedDateChanged={date=>setEnd(date)} language="en" labelTodayButton="اليوم" labelClearButton="حذف" />

    </div>
    <div  className="flex justify-center">    <Button gradientMonochrome="success" className="w-44" onClick={getReprts} >عرض</Button>
    </div>

    {loading&&<div className="flex justify-center"><Spinner color="success" /></div>}
    <div className="text-center font-semibold text-gray-700">{massage} </div> 
  
   {driverReports&&<Table data={driverReports}/>}
   {/* <Othman data={driverReports}/> */}
   {/* <Table data={driverReports}/> */}
    

  </div>

  
    </>
}

