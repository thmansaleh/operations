import { Tooltip } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { addReport } from '../store/features/reports'

function EditBtn({report}) {
    const dispatch =useDispatch()
    // console.log(report)
  return (
    <>
        <Tooltip content="تعديل">

        <svg onClick={ ()=>{
       
        //  dispatch(addReport({action:'new'}))
        //  dispatch(addReport({action:'nida',data:car.nida}))
        dispatch(addReport({action:'action',data:'edit'}))
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
    } className='w-6 h-6  fill-yellow-500' 
  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
           </Tooltip>

    </>
  )
}

export default EditBtn