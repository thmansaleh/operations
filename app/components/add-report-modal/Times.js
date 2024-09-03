import { add as addReport } from '@/app/store/features/addReport'
import { useDispatch, useSelector } from "react-redux"


function Times() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)

    
  return <div className="flex items-center justify-center gap-x-6">
    <input value={report.start} onChange={e=>dispatch(addReport({action:'start',data:e.target.value}))} type="text" className=" focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-20 p-2.5  text-center" placeholder="الإستلام" />
    <input value={report.arrive} onChange={e=>dispatch(addReport({action:'arrive',data:e.target.value}))} type="text" className=" focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-20 p-2.5  text-center" placeholder="الوصول" />
    <input value={report.finish} onChange={e=>dispatch(addReport({action:'finish',data:e.target.value}))} type="text" className="focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-20 p-2.5  text-center" placeholder="الانتهاء" />
  </div>  
}

export default Times