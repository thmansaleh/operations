import { getLocationName } from "@/app/services/helpers/getLocationName"
import { add as addReport } from "@/app/store/features/addReport"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function LatAndLng() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)
    const [name,setName]=useState('')
    useEffect(() => {
      const data=async ()=>{
        const loca= await getLocationName(report.lat,report.lng)
        // console.log(loca.results[0].formatted_address)
        setName(loca.results[0].formatted_address)
        dispatch(addReport({action:'locationName',data:loca.results[0].formatted_address}))
        
      }
      data()

    }, [])
    
    return  <div className="flex  my-3 items-center gap-x-3  text-sm font-semibold">
    <div>موقع الحدث</div>
    :
<div>{name}</div>
</div>
}

export default LatAndLng