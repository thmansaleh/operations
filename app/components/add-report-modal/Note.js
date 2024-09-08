import { add as addReport } from "@/app/store/features/addReport"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Note() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)
  return (
    <div className='flex  my-3 font-semibold text-sm items-center gap-x-3'>
        الملاحظات : 
        <input  value={report.note} onChange={e=>dispatch(addReport({action:'note',data:e.target.value}))} type="text" className="focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg    text-sm  text-center" /> 

    </div>
  )
}

export default Note