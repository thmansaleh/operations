import { swrReport } from "@/app/swr/report"
import { Button } from "flowbite-react"

function Status() {
  const { data , error, isLoading,mutate } = swrReport()
if(data) {
  // if(!data.start) return null
  return <div className=" text-xs pt-3 font-semibold text-gray-800">
    
    <div className="flex items-center gap-x-3">
      <div>وقت بدء الحدث</div>
      :
      <div>
        {data.start?data.start:''}
        </div>
    </div>
   
    

    <div className="flex items-center gap-x-3">
      <div>وقت  الوصول</div>
      :
      <div>
        {data.arrive?data.arrive:''}
        </div>
    </div>
    <div className="flex items-center gap-x-3">
      <div>وقت الإنتهاء</div>
      :
      <div>
        {data.finish?data.finish:''}
        </div>
    </div>
    

  </div>
}

}

export default Status