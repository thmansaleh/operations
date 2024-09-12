import { add as addReport } from '@/app/store/features/addReport' 
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cars from './Cars'
import { Dropdown } from 'flowbite-react'
import { swrCars } from '@/app/swr/cars'
import { getDistanceFromCenter } from '@/app/services/getDistanceFromCenter'

function Nida() {
  const { data  } = swrCars()

    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)
    if(data){
      const cars =data.map(car=>({
        ...car,
        distance:Number(getDistanceFromCenter(report.lat,report.lng,car.current_lat,car.current_lng))


      }))
      const carsFilter=cars.filter(car=>car.is_match)

return <>
<td>
الدورية:
</td>
<td>
<Dropdown label="" dismissOnClick={false} renderTrigger={() => <div className='w-full h-full py-2 text-center bg-red-200 rounded-lg '>ltgkjfb</div>}>
      <Dropdown.Item>Dashboard sdfghjnkm</Dropdown.Item>
      {carsFilter.sort((a,b)=>a.distance - b.distance).map(car=>{
return <Dropdown.Item onClick={()=>addNida(car)} className=" cursor-pointer">
    <input className="hidden select-cars" id={car.nida} name='select-cars' type="radio"/>
    <label htmlFor={car.nida}>


<div className="flex items-center gap-x-4 cursor-pointer text-sm font-semibold">

<div className="flex items-center justify-center    rounded-full     relative h-8 w-8">
<svg className="h-5 w-5  fill-gray-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M96,24a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,24Zm152,88a8,8,0,0,1-8,8h-8v80a16,16,0,0,1-16,16H192a16,16,0,0,1-16-16v-8H80v8a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V120H16a8,8,0,0,1,0-16H27.36L54.75,56.06A16,16,0,0,1,68.64,48H187.36a16,16,0,0,1,13.89,8.06L228.64,104H240A8,8,0,0,1,248,112ZM88,144a8,8,0,0,0-8-8H56a8,8,0,0,0,0,16H80A8,8,0,0,0,88,144Zm120,0a8,8,0,0,0-8-8H176a8,8,0,0,0,0,16h24A8,8,0,0,0,208,144Zm2.21-40L187.36,64H68.64L45.79,104Z"></path></svg>
<svg className="h-2 w-2 absolute bottom-0 fill-gray-500" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
</div>
<div>
    الدورية 
    :
    {car.nida}

</div>
<div>
    المسافة 
    {' '}
    :
    {' '}

km
     {' '}
     {car.distance}
    </div>

</div>


    </label>

</Dropdown.Item>
})}
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>

</td>
</>
    }

}

export default Nida