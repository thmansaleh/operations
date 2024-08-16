'use client'

import { Button } from 'flowbite-react'
import AddReportModal from '../components/add-report-modal/AddRportModal'
import Table from './Table'
import { useDispatch } from 'react-redux'
import { addReport } from '../store/features/reports'

function page() {
    const dispatch =useDispatch()
  return (
    <div className='p-3 space-y-3'>
        <AddReportModal page='reports' carNida=''/>
     

        <Table/>
    </div>
  )
}

export default page