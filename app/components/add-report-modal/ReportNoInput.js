import { add as addReport } from '@/app/store/features/addReport'
import { useDispatch, useSelector } from 'react-redux'

function ReportNoInput() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)
  return  <input value={report.reportNo}  onChange={e=>dispatch(addReport({action:'reportNo',data:e.target.value}))} type="number" className="bg-gray-50 border focus:border-gray-800 border-gray-300 focus:ring-gray-800 text-gray-900 text-sm rounded-lg  w-26 p-2.5  text-center" placeholder="رقم الحدث"
   />


}

export default ReportNoInput