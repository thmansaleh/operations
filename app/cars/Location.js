import Link from 'next/link'
import React from 'react'

function Location({car}) {
  return (
    <div className='flex gap-x-4 items-center'>
<div>التمركز : {car.station}</div>
<Link href={car.location} className='bg-yellow-600 text-white p-2 rounded-lg flex items-center gap-x-2'>
<span className='text-sm'>عرض الموقع
</span>
<svg className='fill-white w-4 h-4' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
</Link>
    </div>
  )
}

export default Location