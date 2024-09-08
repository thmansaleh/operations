import { swrReport } from "@/app/swr/report"
import { Button } from "flowbite-react"
import ChangeReportStatusModal from "./ChangeReportStatusModal"

function Status() {
  const { data , error, isLoading,mutate } = swrReport()
if(data) {
  // if(!data.start) return null
  return <div className=" text-xs pt-3 font-semibold text-gray-800">
    {
    data.start?<div className="flex items-center gap-x-3">
      <div>وقت بدء الحدث</div>
      :
      <div>{data.start}</div>
    </div>
    :null
    }

{
    data.arrive?<div className="flex items-center gap-x-3">
      <div>وقت الوصول للحدث</div>
      :
      <div>{data.arrive}</div>
    </div>
    :null
    }
    {
    data.finish?<div className="flex items-center gap-x-3">
      <div>وقت  انتهاء الحدث</div>
      :
      <div>{data.finish}</div>
    </div>
    :null
    }
    <ChangeReportStatusModal button={
        !data.start?'بدء الحدث':!data.arrive?'تغيير الحالة الى وصول':'انهاء الحدث'
        // {data.start&data.arrive?'انهاء الحدث':null}

    }/>
    

  </div>
}

}

export default Status