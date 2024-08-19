import { Button } from "flowbite-react"
import AddDriver from "./AddDriver"
import AddReportModal from "../components/add-report-modal/AddRportModal"
import { useDispatch } from "react-redux"
import { addReport } from "../store/features/reports"
import InformationBtn from "./InformationBtn"
import AddReportBtn from "./AddReportBtn"
import SpinnerLoading from "../components/SpinnerLoading"
import { swrMechanisms } from "../swr/mechanisms"

function Cars() {
    const dispatch =useDispatch()
    const { data , error, isLoading } = swrMechanisms()
 if(isLoading) return <SpinnerLoading/>

 if(data) return <div className="space-y-4 p-3 max-h-svh overflow-y-auto">
    {data.sort((a,b)=>a.nida - b.nida).map(car=>{
  return <div  className="bg-gray-200 rounded-lg p-3 flex gap-x-4 items-center" key={car.id}> 

 <AddDriver car={car}/>

{car.match_found?<>
<div>
{car.drivers.map(driver=>{
    return      <div key={car.nida} className="text-sm">{driver.name}</div>
    
})}
</div>
<AddReportBtn car={car}/>


<InformationBtn/>


</>
:null
}





        </div>
    })}
 </div>
}

export default Cars