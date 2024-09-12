import { Spinner } from "flowbite-react"
import Reports from "./reports/Reports"
import { swrReportsToday } from "../swr/reportsToday"
import ReportContent from "./report-details/ReportContent"

function Content() {
    const { data ,isLoading } = swrReportsToday()
    if(isLoading) return <div className='flex items-center justify-center h-[66vh] '>
        <Spinner/>
    </div>
if(data){
    if(data.length>0) return <div className='flex h-[66vh] '>
    <Reports/>
    <ReportContent/>
      </div>
      return <div className='flex h-[66vh]    text-base font-semibold from-gray-900 items-center justify-center'>
      لاتوجد أحداث لعرضها
        </div>
} 
return null
}

export default Content