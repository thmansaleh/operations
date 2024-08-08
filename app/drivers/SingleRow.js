import Link from 'next/link'
import React from 'react'

function SingleRow({driver,index}) {
  const url =`drivers/${driver.job_id}`

  return (
    <tr  key={index}>
    <td className='bg-white border-b border-gray-200 text-xs'>{index}</td>
    <td className=" py-3  bg-white text-xs text-gray-900 whitespace-no-wrap border-b border-gray-200">
      {/* <Link prefetch={true} href={url}> */}
      {driver.name}
      {/* </Link> */}
   
    </td>
 
  </tr>
  )
}

export default SingleRow