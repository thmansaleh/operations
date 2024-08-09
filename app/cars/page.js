'use client'

import AddReportModal from "../components/add-report-modal/AddRportModal"
import Cars from "./Cars"

function page() {

  return (
    <div className="p-3">
      <AddReportModal/>
<Cars/>

    </div>
  )
}

export default page