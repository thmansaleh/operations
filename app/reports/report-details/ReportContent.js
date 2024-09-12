import { useSelector } from 'react-redux'
import { swrReport } from '@/app/swr/report'
import Status from './Status'
import Media from './media/Media'
import Vehicles from './vehicles/Vehicles'
import { Spinner } from 'flowbite-react'
import Info from './info/Info'
import Tabs from './tabs/Tabs'
import ChangeReportStatusModal from './ChangeReportStatusModal'

function ReportContent() {
    const { data , error, isLoading,mutate } = swrReport()

    const reportId=useSelector(state=>state.reports.reportId)
    const nav=useSelector(state=>state.reports.reportNav)
    if(!reportId) return <div className="flex justify-center w-full items-center  text-sm font-semibold">انقر على الحدث لعرض التفاصيل</div>
    if(isLoading) return <div className="flex justify-center w-full items-center"><Spinner color="success" /></div>
 if(data) return (
    <div className='pr-10 flex-1 space-y-3'>
      
        <div className=" bg-gray-200  flex  items-center gap-x-10  rounded-lg font-semibold py-2 px-3 text-sm text-green-600"> 
        رقم الحدث : {data.report_no}
        <ChangeReportStatusModal/>
        </div>
        <Tabs/>
        {nav==='info'?<Info/>:null}
        {nav==='status'?<Status/>:null}
        {nav==='vehicles'?<Vehicles/>:null}
        {nav==='media'?<Media/>:null}
    </div>
  )
}

export default ReportContent