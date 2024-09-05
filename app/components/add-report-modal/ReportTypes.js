import { add as addReport } from '@/app/store/features/addReport'
import { swrReportTypes } from '@/app/swr/reportTypes'
import { Select } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReportTypes() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)

    const { data,isLoading  } = swrReportTypes()
if(isLoading) return 'loading'
  return <div className="flex items-center text-sm font-semibold gap-x-3">
    
  <div>نوع الحدث</div>
  :
   
  <Select defaultValue={report.typeId}  onChange={e=>dispatch(addReport({action:'typeId',data:e.target.value}))} className=" w-44" >
     <option disabled  className='text-sm'>نوع الحدث</option>
          {data.map(type=>{
            return <option  className='text-sm' value={type.id} key={type.id}>{type.type} </option>
          })}
      </Select>  
      </div>
}

export default ReportTypes