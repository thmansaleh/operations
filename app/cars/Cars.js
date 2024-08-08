import { Button } from "flowbite-react"
import { swrCars } from "../swr/cars"
import AddDriver from "./AddDriver"
import AddReportModal from "../components/add-report-modal/AddRportModal"

function Cars() {
    const { data , error, isLoading } = swrCars()
 if(isLoading) return <div>جاري التحميل</div>
//  if(data) console.log(data)
 if(data) return <div className="space-y-4 p-3 max-h-svh overflow-y-auto">
    {data.sort((a,b)=>a.nida - b.nida).map(car=>{
        // console.log(JSON.parse(car.drivers))
        return <div  className="bg-gray-200 rounded-lg p-3 flex gap-x-4 items-center" key={car.id}> 

 <AddDriver car={car}/>

{car.match_found?<>
<div>
{JSON.parse(car.drivers).map(driver=>{
    return      <div key={car.nida} className="text-sm">{driver.name}</div>
    
})}
</div>
<Button size="xs" gradientMonochrome="teal">اضافة حدث</Button>
     <AddReportModal page='cars' carNida={car.nida}/>


</>
:null
}





        </div>
    })}
 </div>
}

export default Cars