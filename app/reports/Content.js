import { Spinner } from "flowbite-react"
import ReportDetails from "./ReportDetails"
import Reports from "./Reports"
import { swrReportsToday } from "../swr/reportsToday"

function Content() {
    const { data ,isLoading } = swrReportsToday('المسائية')
    if(isLoading) return <div className='flex items-center justify-center h-[66vh] '>
        <Spinner/>
    </div>
if(data){
    if(data.length>0) return <div className='flex h-[66vh] '>
    <Reports/>
    <ReportDetails/>
      </div>
}else return <div className='flex h-[66vh]   items-center justify-center'>
لاتوجد أحداث لعرضها
  </div>
return null
}

export default Content