import { add as addReport } from '@/app/store/features/addReport'
import { swrSources } from '@/app/swr/sources'
import {  Select } from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux'

function Sources() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)

    const { data ,isLoading } = swrSources()
if(isLoading) return 'looading'
if(data) return <div className="flex items-center font-semibold text-sm gap-x-3">
          <div>مصدر الحدث</div>

          :

  <Select defaultValue={report.sourceId}   onChange={e=>dispatch(addReport({action:'sourceId',data:e.target.value}))} className=" w-44 text-2xl" >
     {/* <option  className=" w-32 text-xl" >أختر المصدر</option> */}
     {data.map(source=>{
            return <option className='text-sm' value={source.id} key={source.id}>{source.source_name} </option>
          })}
      </Select>  
</div>
 

}

export default Sources