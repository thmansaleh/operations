import { Button } from "flowbite-react"
import { swrCars } from "../swr/cars"
import AddDriver from "./AddDriver"
import AddReportModal from "../components/add-report-modal/AddRportModal"
import { useDispatch } from "react-redux"
import { addReport } from "../store/features/reports"

function Cars() {
    const dispatch =useDispatch()
    const { data , error, isLoading } = swrCars()
 if(isLoading) return <div>جاري التحميل</div>
 if(data) return <div className="space-y-4 p-3 max-h-svh overflow-y-auto">
    {data.sort((a,b)=>a.nida - b.nida).map(car=>{
        return <div  className="bg-gray-200 rounded-lg p-3 flex gap-x-4 items-center" key={car.id}> 

 <AddDriver car={car}/>

{car.match_found?<>
<div>
{JSON.parse(car.drivers).map(driver=>{
    return      <div key={car.nida} className="text-sm">{driver.name}</div>
    
})}
</div>
     {/* <AddReportModal page='cars' value={car.nida}/> */}
     <Button onClick={ ()=>{
         dispatch(addReport({action:'new'}))
         dispatch(addReport({action:'page',data:'cars'}))
         dispatch(addReport({action:'nida',data:car.nida}))
         dispatch(addReport({action:'modalDispaly',data:true}))
    }
} gradientMonochrome="info" size='xs'>اضافة حدث</Button>




</>
:null
}





        </div>
    })}
 </div>
}

export default Cars