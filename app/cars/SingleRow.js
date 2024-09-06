import React from 'react'
import Drivers from './Drivers'
import Phones from './Phones'
import CarIcon from './CarIcon'
import Distance from './Distance'
import RecoverIcon from './RecoveryIcon'

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
      {/* <td className=' text-green-500 font-semibold'>متصل</td> */}
      <td className=' text-green-500 font-semibold'>{car.is_match?new Date(car.last_update).toLocaleTimeString():null}</td>
      <td className=' text-green-500 font-semibold'>
        <Distance car={car}/>
      </td>
    </tr>
  )
}

export default SingleRow