
import { addReport } from "@/app/store/features/reports"
import { swrStreets } from "@/app/swr/streets"
import { Select } from "flowbite-react"
import { useDispatch, useSelector } from "react-redux"

function StreetName() {
  const dispatch=useDispatch()
  const { data ,isLoading } = swrStreets()
  const report =useSelector(state=>state.reports.addReport)

if(isLoading) return 'loading'

return <div className="flex items-center gap-x-3">
  <Select defaultValue={report.streetId}  onChange={e=>dispatch(addReport({action:'streetId',data:e.target.value}))} className=" w-fit" >
{data.map(street=>{
  return <option value={street.id} key={street.id}>{street.street_name} </option>
})}
</Select>
<input  value={report.description} onChange={e=>dispatch(addReport({action:'description',data:e.target.value}))} type="text" className="focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   p-2.5  text-center" placeholder="الوصف" />

</div>
}

export default StreetName