'use client'

import { Button } from 'flowbite-react'
import AddReportModal from '../components/add-report-modal/AddRportModal'
import Table from './Table'
import { useDispatch } from 'react-redux'
import { addReport } from '../store/features/reports'
import AddReportBtn from './AddReportBtn'

function page() {
    const dispatch =useDispatch()
  return <>
  <AddReportBtn/>
    <div className='p-3 space-y-3'>
        <AddReportModal page='reports' carNida=''/>
     

<div className='flex '>
<Table/>
<div className='bg-gray-500 h-72 flex-1'>

</div>
  </div>    </div>
  </>
  
}

export default page