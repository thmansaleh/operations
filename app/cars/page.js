'use client'

import AddReportModal from "../components/add-report-modal/AddRportModal"
import { swrCars } from "../swr/cars"
import Cars from "./Cars"
import RefreshBtn from "./RefreshBtn"

function page() {
  const { data , error, isLoading } = swrCars()

  return (
    <div className="p-3">
      <AddReportModal/>
      <RefreshBtn/>
<Cars/>

    </div>
  )
}

export default page