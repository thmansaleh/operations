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
if(data)return <>
<td className="py-3">نوع الحدث
  :

</td>
<td className=''><Select defaultValue={report.typeId}  onChange={e=>dispatch(addReport({action:'typeId',data:e.target.value}))} className=" w-full" >
<option  ></option>
{data.map(type=>{
            return <option   value={type.id} key={type.id}>{type.type} </option>
          })}
      </Select>  </td>
</>

}

export default ReportTypes