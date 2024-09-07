import { swrReport } from "@/app/swr/report"
import { Spinner } from "flowbite-react"
import { useSelector } from "react-redux"
import ReportLocation from "./ReportLocation"

function ReportDetails() {
    const { data , error, isLoading,mutate } = swrReport()
  
if(isLoading) return <div className="flex justify-center w-full items-center"><Spinner color="success" /></div>
if(data) console.log(data)
if(data)  return <div className='bg-gray-1003  space-y-3 text-sm flex  font-semibold   flex-col text-gray-900 flex-1'>

    <div> الدورية : {data.nida}</div>
    <ReportLocation name={data.location_name}/>



<div className="flex     gap-x-44">

    <div>
    <div> تاريح الحدث : {new Date(data.date).toLocaleDateString()}</div>
    <div> نوع الحدث : {data.type}</div>
    <div> الشارع : {data.street_name}</div>
    <div> الوصف : {data.description}</div>
    <div> الملاحظات : {data.note_police}</div>
    <div> عدد المسارات المغلقة : {data.close_lines_count}</div>
    <div> مسار توقف المركبات : {data.cars_stop}</div>
    </div>

    <div>
    <div> وقت إنشاء الحدث : {new Date(data.date).toLocaleTimeString()}</div>
    <div> مصدر الحدث : {data.source_name}</div>
    <div> خط الطول والعرض : {`${data.lat},${data.lng}`}</div>
   
    </div>
    {/* <div></div> */}

</div>




    </div>
  
}

export default ReportDetails