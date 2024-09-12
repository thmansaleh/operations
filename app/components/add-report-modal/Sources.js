import { add as addReport } from '@/app/store/features/addReport'
import { swrSources } from '@/app/swr/sources'
import {  Select } from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux'

function Sources() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)

    const { data ,isLoading } = swrSources()
if(isLoading) return 'looading'
if(data) return  <>
<td
>مصدر الحدث
:
{`     `}

</td>
<td className='px-4'> <Select defaultValue={report.sourceId}   onChange={e=>dispatch(addReport({action:'sourceId',data:e.target.value}))} className=" w-full" >
<option  ></option>
{data.map(source=>{
            return <option value={source.id} key={source.id}>{source.source_name} </option>
          })}
      </Select>  </td>
</>

 

}

export default Sources