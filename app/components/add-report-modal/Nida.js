import { add as addReport } from '@/app/store/features/addReport' 
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cars from './Cars'

function Nida() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)

    if(true) return <Cars/>
  return <input disabled value={report.nida}   onChange={e=>dispatch(addReport({action:'nida',data:e.target.value}))} type="number" className="bg-gray-50 border focus:ring-gray-800 focus:border-gray-800 border-gray-300 text-gray-900 text-sm rounded-lg  w-20 p-2.5  text-center" placeholder="الدورية" />


}

export default Nida