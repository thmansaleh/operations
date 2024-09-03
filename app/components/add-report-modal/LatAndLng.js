import { add as addReport } from "@/app/store/features/addReport"
import { useDispatch, useSelector } from "react-redux"

function LatAndLng() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)

    return  <input  onChange={e=>dispatch(addReport({action:'location',data:e.target.value}))} type="text" className="bg-gray-50 border focus:border-gray-800 border-gray-300 focus:ring-gray-800 text-gray-900 text-sm rounded-lg   p-2.5  text-center   flex-1" placeholder="خط الطول و العرض"
/>
}

export default LatAndLng