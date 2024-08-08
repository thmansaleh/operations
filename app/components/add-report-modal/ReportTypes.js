import { addReport } from '@/app/store/features/reports'
import { swrReportTypes } from '@/app/swr/reportTypes'
import { Select } from 'flowbite-react'
import React from 'react'
import { useDispatch } from 'react-redux'

function ReportTypes() {
    const dispatch =useDispatch()
    const { data,isLoading  } = swrReportTypes()
if(isLoading) return 'loading'
  return <Select onChange={e=>dispatch(addReport({action:'typeId',data:e.target.value}))} className=" w-32" >
          {data.map(type=>{
            return <option  value={type.id} key={type.id}>{type.type} </option>
          })}
      </Select>  
}

export default ReportTypes