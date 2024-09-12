'use client'

import AddReportModal from "../components/add-report-modal/AddRportModal"
import { swrCars } from "../swr/cars"
import Cars from "./Cars"
import Filter from "./filter/Filter"
import RefreshBtn from "./RefreshBtn"
import Table from "./Table"

function page() {
  const { data , error, isLoading } = swrCars()
  if(data) return <>
  <Filter/>
  <Table  cars={data}/>
  </>
  return null

}

export default page