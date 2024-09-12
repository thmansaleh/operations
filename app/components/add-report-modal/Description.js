import { add as addReport } from "@/app/store/features/addReport"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Description() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)
     return <>
     <td className="py-4">
      الوصف
      :
     </td>
     <td>
     <input   value={report.description} onChange={e=>dispatch(addReport({action:'description',data:e.target.value}))} type="text" className="focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900  w-full rounded-lg   text-sm    rr"  /> 

     </td>
     </>

}

export default Description