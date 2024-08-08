import { addReport } from '@/app/store/features/reports'
import { swrSources } from '@/app/swr/sources'
import { Select } from 'flowbite-react'
import { useDispatch } from 'react-redux'

function Sources() {
    const dispatch =useDispatch()
    const { data ,isLoading } = swrSources()
if(isLoading) return 'looading'
  return <Select onChange={e=>dispatch(addReport({action:'sourceId',data:e.target.value}))} className=" w-32" >
          {data.map(source=>{
            return <option value={source.id} key={source.id}>{source.source_name} </option>
          })}
      </Select>  

}

export default Sources