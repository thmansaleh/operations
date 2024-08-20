import { addReport } from '@/app/store/features/reports'
import { swrSources } from '@/app/swr/sources'
import { Select } from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux'

function Sources() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state.reports.addReport)

    const { data ,isLoading } = swrSources()
if(isLoading) return 'looading'
  return <Select defaultValue={report.sourceId}  onChange={e=>dispatch(addReport({action:'sourceId',data:e.target.value}))} className=" w-32" >
     <option >مصدر البلاغ</option>
     {data.map(source=>{
            return <option value={source.id} key={source.id}>{source.source_name} </option>
          })}
      </Select>  

}

export default Sources