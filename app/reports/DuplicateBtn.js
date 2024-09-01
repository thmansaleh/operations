import { Tooltip } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { addReport } from '../store/features/reports'

function DuplicateBtn({report}) {
    const dispatch =useDispatch()
    // console.log(report)
  return (
    <>
        <Tooltip content="ربط الحدث">

        <svg onClick={ ()=>{
         dispatch(addReport({action:'action',data:'duplicate'}))
         dispatch(addReport({action:'modalDispaly',data:true}))
         dispatch(addReport({action:'new',data:{
            id:null,
            nida:null,
            reportNo:report.report_no,
            sourceId:report.source_id,
            typeId:report.type_id,
            start:null,
            arrive:null,
            finish:null,
            streetId:report.street_id,
            description:report.description,
            note:report.note_police,
    
        }}))

        }
    } className='w-6 h-6  fill-gray-800' 
    stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>
           </Tooltip>

    </>
  )
}

export default DuplicateBtn

