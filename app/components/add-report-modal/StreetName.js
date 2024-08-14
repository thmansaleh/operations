import { addReport } from "@/app/store/features/reports"
import { swrStreets } from "@/app/swr/streets"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function StreetName() {
    const dispatch=useDispatch()
    const { data ,isLoading } = swrStreets()
    const report =useSelector(state=>state.reports.addReport)

    const [streets,setStreets]=useState([])
    const [streetName,setStreetName]=useState()
if(isLoading) return 'loading'
const serach=(value)=>{
   if(value.length>2){
    const newSearch = data.filter(street => 
        street.street_name.includes(value) 
        
    )
setStreets(newSearch)    
   }

}
return <div className="flex gap-x-3">
    
  <div className="relative ">
  <div className="flex px-4  rounded-md border-2 border-gary-900 overflow-hidden w-full font-[sans-serif]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600 mr-3 rotate-90">
      <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
      </path>
    </svg>
    <input value={streetName} onChange={e=>{
        serach(e.target.value)
        setStreetName(e.target.value)
    }
} type="text" placeholder="اسم الشارع" className="w-full px-3 outline-none focus:outline-none focus:border-none focus:ring-0  border-none bg-transparent text-gray-600 text-sm" />
  </div>
{streets.length>0&&<div className="w-full z-50 absolute  bg-white  top-16 rounded-lg shadow-md space-y-3 text-sm p-3 right-0">
    {/* <div className="border-b pb-2 text-gray-700">شارع الشيخ محمد بن زايد</div> */}
    {streets.map(street=>{
        return     <div onClick={e=>{
            dispatch(addReport({action:'streetId',data:street.id}))
            setStreetName(street.street_name)
            setStreets([])
        }
    } key={street.id} className="border-b pb-2 text-gray-700  cursor-pointer hover:bg-gray-100">{street.street_name}</div>
    
    })}
  </div>}
</div>
<input  value={report.description} onChange={e=>dispatch(addReport({action:'description',data:e.target.value}))} type="text" className="focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5  text-center" placeholder="الوصف" />
</div>
}

export default StreetName