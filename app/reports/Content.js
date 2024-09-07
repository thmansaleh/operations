import { Spinner } from "flowbite-react"
import Reports from "./Reports"
import { swrReportsToday } from "../swr/reportsToday"
import ReportContent from "./report-details/ReportContent"

function Content() {
    const { data ,isLoading } = swrReportsToday('المسائية')
    if(isLoading) return <div className='flex items-center justify-center h-[66vh] '>
        <Spinner/>
    </div>
if(data){
    if(data.length>0) return <div className='flex h-[66vh] '>
    <Reports/>
    <ReportContent/>
      </div>
}else return <div className='flex h-[66vh]   items-center justify-center'>
لاتوجد أحداث لعرضها
  </div>
return null
}

export default Content