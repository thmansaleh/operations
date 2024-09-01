import { addReport } from "@/app/store/features/reports"
import { swrCars } from "@/app/swr/cars"
import { Select } from "flowbite-react"
import { useDispatch } from "react-redux"

function Cars() {
    const { data , error, isLoading } = swrCars()
const dispatch=useDispatch()
if(isLoading) return "جاري التحميل ..."
   if(data) return <Select   onChange={e=>dispatch(addReport({action:'nida',data:e.target.value}))} className=" w-32" >
    <option >الدورية</option>
         {data.map(car=>{
          if(car.is_match) return <option  value={car.nida} key={car.car_id}>{car.nida} </option>
         })}
     </Select> 
}

export default Cars