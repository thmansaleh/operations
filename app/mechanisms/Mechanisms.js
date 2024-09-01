import { Button } from "flowbite-react"
import AddDriver from "./AddDriver"
import AddReportModal from "../components/add-report-modal/AddRportModal"
import { useDispatch } from "react-redux"
import { addReport } from "../store/features/reports"
import InformationBtn from "./InformationBtn"
import AddReportBtn from "./AddReportBtn"
import SpinnerLoading from "../components/SpinnerLoading"
// import { swrMechanisms } from "../swr/mechanisms"
import { swrCars } from "../swr/cars"
import CarDetails from "../cars/CarDetails"

function Cars() {
    const dispatch =useDispatch()
    const { data , error, isLoading } = swrCars()
 if(isLoading) return <SpinnerLoading/>

 if(data) return <div className="space-y-4 p-3 max-h-svh overflow-y-auto">
    {data.sort((a,b)=>a.nida - b.nida).map(car=>{
  if(car.type!='patrol') return <div  className="bg-gray-200 rounded-lg p-3 flex gap-x-4 items-center" key={car.car_id}> 

 <AddDriver car={car}/>

{car.is_match?<>
    <AddReportBtn car={car}/>


<CarDetails car={car}/>
    <div >

{car.is_match?<div className='text-sm  '>{car.driver_name}</div>:null}
{car.extra_driver_name?<div className='text-sm  '>{car.extra_driver_name}</div>:null}
</div>
{car.is_match?<div className='text-sm bg-yellow-500 p-1 text-white rounded  '>{new Date(car.date).toLocaleTimeString()}</div>:null
}



</>
:null
}





        </div>
    })}
 </div>
}

export default Cars