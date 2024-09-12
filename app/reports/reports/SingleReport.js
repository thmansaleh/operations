import { actions, setReportId } from "@/app/store/features/reports"
import { useDispatch, useSelector } from "react-redux"

function SingleReport({report}) {
    const dispatch =useDispatch()
    const filterNav=useSelector(state=>state.reports.filterNav)
    const setId=(id)=>{
        dispatch(setReportId(id))
        dispatch(actions({action:'reportNav',data:'info'}))
  
      }
  return (
   <tr>
    <div key={report.report_no} onClick={()=>setId(report.id)}>
    <input className='reportsInput hidden'  id={report.report_no}  name='reports' type='radio'/>
    <label htmlFor={report.report_no}>
    <div className=' px-2  whitespace-nowrap flex  text-xs    cursor-pointer text-black  bg-gray-20w0 font-semibold py-3 gap-x-2'>
    <div >{report.type}</div>
   
    <div >على</div>
    <div >{report.street_name}</div>
    <div >
        الدورية المتوجهه
        :
        {report.nida}</div>
    </div>
    </label>
</div>
   </tr>
  )
}

export default SingleReport