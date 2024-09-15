import React from 'react'
import Drivers from './Drivers'
import Phones from './Phones'
import CarIcon from './CarIcon'
import Distance from './Distance'
import RecoverIcon from './RecoveryIcon'
import { getLocationName } from '../services/helpers/getLocationName'
import { getTimePassedInArabic } from '../services/helpers/getTimePassedInArabic'
import ReportsCount from './ReportsCount'
import { isMoreThanMinuteAgo } from '../services/helpers/isMoreThanMinuteAgo'

function SingleRow({car}) {
  return (
    <tr className=' border-b'>
      <td className='  text-center flex justify-center'>
        {car.type==='patrol'?<CarIcon car={car}/>:<RecoverIcon car={car}/>}
        </td>
      <td className=' font-bold '>{car.nida}</td>
      <td>
        <Drivers car={car}/>
      </td>
      <td><Phones car={car}/></td>


      <td>{car.is_match?new Date(car.date).toLocaleTimeString():null}</td>
      {/* <td className=' text-green-500 font-semibold'>{getTimePassedInArabic(new Date(car.date),new Date().toISOString())}</td> */}
      <td className=' text-green-500 font-semibold'>{car.is_match?new Date(car.last_update).toLocaleTimeString():null}</td>
      <td className=' text-green-500 font-semibold'>
        <Distance car={car}/>
      </td>
      <td>{car.is_match?<ReportsCount nida={car.nida}/>:null}</td>
      <td >{car.is_match?<div className='flex items-center justify-center gap-x-3'>
        {isMoreThanMinuteAgo(car.last_update)?<div className=' text-gray-600'>غير متصل</div> :<div className=' to-green-600'> متصل</div>}
        {isMoreThanMinuteAgo(car.last_update)?<div  className='w-2 h-2 rounded-full bg-gray-600'></div>:<div className='w-2 h-2 rounded-full bg-green-600'></div>}
      </div>:null}</td>

    </tr>
  )
}

export default SingleRow