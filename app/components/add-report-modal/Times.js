import { addReport } from "@/app/store/features/reports"
import { useDispatch } from "react-redux"


function Times() {
    const dispatch =useDispatch()
    
  return <div className="flex items-center justify-center gap-x-6">
    <input onChange={e=>dispatch(addReport({action:'start',data:e.target.value}))} type="text" className=" focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-20 p-2.5  text-center" placeholder="الإستلام" />
    <input onChange={e=>dispatch(addReport({action:'arrive',data:e.target.value}))} type="text" className=" focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-20 p-2.5  text-center" placeholder="الوصول" />
    <input onChange={e=>dispatch(addReport({action:'finish',data:e.target.value}))} type="text" className="focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-20 p-2.5  text-center" placeholder="الانتهاء" />
  </div>  
}

export default Times