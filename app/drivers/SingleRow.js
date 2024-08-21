import Link from 'next/link'
import React from 'react'

function SingleRow({driver,index}) {
  const url =`drivers/${driver.job_id}`

  return (
    <tr  key={index}>
    <td className='bg-white border-b text-md  font-semibold border-gray-200 text-xs'>

{index}     </td>
    <td className=" py-3 text-md  font-semibold  bg-white text-xs text-gray-900 whitespace-no-wrap border-b border-gray-200">
      {driver.name}
   
    </td>
    <td className=" py-3 text-md  font-semibold  bg-white text-xs text-gray-900 whitespace-no-wrap border-b border-gray-200">
      {driver.phone}
   
    </td>
 
  </tr>
  )
}

export default SingleRow