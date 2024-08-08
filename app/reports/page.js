'use client'

import AddReportModal from '../components/add-report-modal/AddRportModal'
import Table from './Table'

function page() {
    
  return (
    <div>
        <AddReportModal page='reports' carNida=''/>
        <Table/>
    </div>
  )
}

export default page