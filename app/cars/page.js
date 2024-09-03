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
if(data){
  const cars=data.filter(car=>car.is_match)
  console.log(cars.length)
  if(cars.length>0)  return <div className="p-3">
  <RefreshBtn/>
  <Cars/>

</div>

return <div className="p-3">
{/* <RefreshBtn/> */}
<div className="text-center text-md font-semibold text-gray-800 my-7">لاتوجد دوريات</div>

</div>
 
}

}

export default page