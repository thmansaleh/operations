import { swrReport } from "@/app/swr/report"
import { Spinner } from "flowbite-react"
import { useSelector } from "react-redux"
import ReportLocation from "./ReportLocation"

function ReportDetails() {
    const { data , error, isLoading,mutate } = swrReport()
  
if(isLoading) return <div className="flex justify-center w-full items-center"><Spinner color="success" /></div>
if(data) console.log(data)
if(data)  return <div className='bg-gray-1003  space-y-3 text-sm flex   font-semibold   w-full flex-col text-gray-900 flex-1'>

    <div className="flex items-center gap-x-3"> 
    <svg className="w-4 h-4" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M96,24a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,24Zm152,88a8,8,0,0,1-8,8h-8v80a16,16,0,0,1-16,16H192a16,16,0,0,1-16-16v-8H80v8a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V120H16a8,8,0,0,1,0-16H27.36L54.75,56.06A16,16,0,0,1,68.64,48H187.36a16,16,0,0,1,13.89,8.06L228.64,104H240A8,8,0,0,1,248,112ZM88,144a8,8,0,0,0-8-8H56a8,8,0,0,0,0,16H80A8,8,0,0,0,88,144Zm120,0a8,8,0,0,0-8-8H176a8,8,0,0,0,0,16h24A8,8,0,0,0,208,144Zm2.21-40L187.36,64H68.64L45.79,104Z"></path></svg>
        الدورية 
        : 
        {data.nida}
        </div>
    <ReportLocation name={data.location_name}/>



<div className="flex   w-full   gap-x-44">

    <div className="space-y-2">
    <div className="  gap-x-3 flex items-center"> 
    <svg className="w-4 h-4 " stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"></path></svg>

        تاريح الحدث 
        :
         {new Date(data.date).toLocaleDateString()}</div>
    <div className="  gap-x-3 flex items-center" >
    <svg className="w-4 fill-yellow-500 h-4" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"></path></svg>

         نوع الحدث 
         : 
         {data.type}</div>
    <div className="  gap-x-3 flex items-center"> 
    <svg className="w-4 h-4" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M4 19l4 -14"></path><path d="M16 5l4 14"></path><path d="M12 8v-2"></path><path d="M12 13v-2"></path><path d="M12 18v-2"></path></svg>
        الشارع 
        : 
        {data.street_name}</div>
    <div> الوصف : {data.description}</div>
    <div> الملاحظات : {data.note_police}</div>
    <div> عدد المسارات المغلقة : {data.close_lines_count}</div>
    <div> مسار توقف المركبات : {data.cars_stop}</div>
    </div>

    <div className="space-y-2">
    <div className="  gap-x-3 flex items-center"> 
    <svg className="w-4 h-4" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><g fill-opacity=".9"><path d="M255.8 48C141 48 48 141.2 48 256s93 208 207.8 208c115 0 208.2-93.2 208.2-208S370.8 48 255.8 48zm.2 374.4c-91.9 0-166.4-74.5-166.4-166.4S164.1 89.6 256 89.6 422.4 164.1 422.4 256 347.9 422.4 256 422.4z"></path><path d="M266.4 152h-31.2v124.8l109.2 65.5 15.6-25.6-93.6-55.5V152z"></path></g></svg>        وقت إنشاء الحدث : 
        {new Date(data.date).toLocaleTimeString()}</div>
    <div  className="  gap-x-3 flex items-center">
    <svg className="w-4 h-4" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M16.616 13.924a5 5 0 1 0 -9.23 0"></path><path d="M20.307 15.469a9 9 0 1 0 -16.615 0"></path><path d="M9 21l3 -9l3 9"></path><path d="M10 19h4"></path></svg>         مصدر الحدث 
         : 
         {data.source_name}
         </div>
   
    </div>
    {/* <div></div> */}

</div>




    </div>
  
}

export default ReportDetails