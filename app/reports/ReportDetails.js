import { swrReport } from "../swr/report"
import ReportLocation from "./ReportLocation"

function ReportDetails() {
    const { data , error, isLoading,mutate } = swrReport()
if(isLoading) return 'loading'
if(data) console.log(data)
if(data)  return <div className='bg-gray-1003  space-y-3 text-sm flex  font-semibold  pr-10 flex-col text-gray-900 flex-1'>
<div className=" bg-gray-200   rounded-lg font-semibold py-2 px-3 text-sm text-green-600"> 
    رقم الحدث : {data.report_no}</div>
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