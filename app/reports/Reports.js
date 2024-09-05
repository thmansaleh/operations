import React from 'react'
import { swrReportsToday } from '../swr/reportsToday'
import './styles.css'
import { useDispatch } from 'react-redux'
import { setReportId } from '../store/features/reports'

function Reports() {
    const dispatch =useDispatch()
    const { data ,isLoading } = swrReportsToday('المسائية')
  if(data) return (
    <div className='w-[40vh]  ring-2 ring-neutral-600 rounded-lg resize-x overflow-auto'>
        <div className=' text-center font-semibold text-sm py-2 text-black'>الأحداث الأخيرة</div>
<div className='space-y-1   overflow-hidden '>
{data.map(report=>{
    return <div key={report.report_no} onClick={()=>dispatch(setReportId(report.id))}>
    <input className='reportsInput hidden'  id={report.report_no}  name='reports' type='radio'/>
    <label htmlFor={report.report_no}>
    <div className=' px-2  whitespace-nowrap flex  text-xs    cursor-pointer text-black  bg-gray-200 font-semibold py-3 gap-x-2'>
    <div >{report.type}</div>
   
    <div >على</div>
    <div >{report.street_name}</div>
    <div >
        الدورية المتوجهه
        :
        {report.nida}</div>
    </div>
    </label>
</div>
})}

  
</div>
    </div>
  )
}

export default Reports