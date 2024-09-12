import { getLocationName } from "@/app/services/helpers/getLocationName"
import { add as addReport } from "@/app/store/features/addReport"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function LocationName() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)
    const [name,setName]=useState('')
    useEffect(() => {
      const data=async ()=>{
        const loca= await getLocationName(report.lat,report.lng)
        // console.log(loca.results[0].formatted_address)
        setName(loca)
        // console.log(` ${loca.address.road} ${loca.address.suburb} `,loca)
        dispatch(addReport({action:'locationName',data:loca}))
        
      }
      data()

    }, [])
  return (
    <tr>
    <td className="py-3">
        موقع الحدث
        :
        {` `}
        </td>
    <td>{name}</td>
   </tr>  )
}

export default LocationName