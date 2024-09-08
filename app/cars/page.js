'use client'

import AddReportModal from "../components/add-report-modal/AddRportModal"
import { swrCars } from "../swr/cars"
import Cars from "./Cars"
import RefreshBtn from "./RefreshBtn"
import Table from "./Table"

function page() {
  const { data , error, isLoading } = swrCars()
  if(data) return <Table  cars={data}/>
  return null

}

export default page