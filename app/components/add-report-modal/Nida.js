import { addReport } from '@/app/store/features/reports'
import React from 'react'
import { useDispatch } from 'react-redux'

function Nida({page,value}) {
    const dispatch =useDispatch()
  return    <div className="flex justify-center items-center gap-x-4">
  <input  onChange={e=>dispatch(addReport({action:'reportNo',data:e.target.value}))} type="number" className="bg-gray-50 border focus:border-gray-800 border-gray-300 focus:ring-gray-800 text-gray-900 text-sm rounded-lg  w-26 p-2.5  text-center" placeholder="رقم الحدث" />
 <input value={page=='cars'?value:null} disabled={page=='cars'?true:false} onChange={e=>dispatch(addReport({action:'nida',data:e.target.value}))} type="number" className="bg-gray-50 border focus:ring-gray-800 focus:border-gray-800 border-gray-300 text-gray-900 text-sm rounded-lg  w-20 p-2.5  text-center" placeholder="الدورية" />


</div>
}

export default Nida