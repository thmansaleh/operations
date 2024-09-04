'use client'

import { Button } from 'flowbite-react'
import AddReportModal from '../components/add-report-modal/AddRportModal'
import Table from './Table'
import { useDispatch } from 'react-redux'
import { addReport } from '../store/features/reports'
import AddReportBtn from './AddReportBtn'
import ReportDetails from './ReportDetails'
import Reports from './Reports'
import MapModal from './MapModal'
function page() {
    const dispatch =useDispatch()
  return <>
  {/* <AddReportBtn/> */}
    <div className='p-3 space-y-3'>
     
<MapModal/>
<div className='flex h-[66vh] '>
{/* <Table/> */}
<Reports/>
<ReportDetails/>
  </div>

    </div>
  </>
  
}

export default page