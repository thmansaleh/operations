
import { add as addReport } from '@/app/store/features/addReport'
import { swrStreets } from "@/app/swr/streets"
import { Select } from "flowbite-react"
import { useDispatch, useSelector } from "react-redux"

function StreetName() {
  const dispatch=useDispatch()
  const { data ,isLoading } = swrStreets()
  const report =useSelector(state=>state.addReport)

if(isLoading) return 'loading'
if(data)return <>
<td className="py-4">
الشارع
:

</td>
<td className='px-4'><Select defaultValue={report.streetId}  onChange={e=>dispatch(addReport({action:'streetId',data:e.target.value}))} className="w-full focus:ring-gray-800 focus:border-gray-800" >
  <option  ></option>
  {data.map(street=>{
  return <option className='text-sm' value={street.id} key={street.id}>{street.street_name} </option>
})}
</Select></td>
</>


}

export default StreetName