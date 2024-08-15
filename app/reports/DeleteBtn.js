import { Tooltip } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { addReport } from '../store/features/reports'

export default function DeleteBtn({report}) {
    const dispatch =useDispatch()
    // console.log(report)
  return (
    <>
        <Tooltip content="حذف">

        <svg onClick={ ()=>{
       
        //  dispatch(addReport({action:'new'}))
        //  dispatch(addReport({action:'page',data:'cars'}))
        //  dispatch(addReport({action:'nida',data:car.nida}))
         dispatch(addReport({action:'modalDispaly',data:true}))
         dispatch(addReport({action:'new',data:{
            id:report.id,
            nida:report.nida,
            reportNo:report.report_no,
            sourceId:report.source_id,
            typeId:report.type_id,
            start:report.start,
            arrive:report.arrive,
            finish:report.finish,
            streetId:report.street_id,
            description:report.description,
            note:report.note_police,
    
        }}))

        }
    } className='w-6 h-6  fill-red-600' 
     stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>           </Tooltip>

    </>
  )
}

