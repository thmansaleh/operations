import { add as addReport } from "@/app/store/features/addReport" 
import { swrCars } from "@/app/swr/cars"
import {  Select } from "flowbite-react"
import { useDispatch } from "react-redux"

function Cars() {
    const { data , error, isLoading } = swrCars()
const dispatch=useDispatch()
if(isLoading) return "جاري التحميل ..."
   if(data) return <div className="flex items-center text-base font-semibold gap-x-3">
    
        <div>الدورية</div>
        :
         
   <Select    onChange={e=>{
    dispatch(addReport({action:'nida',data:{nida:data[e.target.value].nida,carId:data[e.target.value].car_history_id}}))
   }} className=" w-44" >
    <option className="text-xl" ></option>
         {data.map((car,i)=>{
          if(car.is_match) return <option className="text-xl"  value={i} key={car.car_id}>{car.nida} </option>
         })}
     </Select> 
    
   </div>
}

export default Cars