import { Avatar } from 'flowbite-react'
import React from 'react'

function Username() {
  return (
    <div className=' flex items-center gap-x-4 text-white text-sm font-semibold'>
        <Avatar rounded/>
        <span>مرحــبا, عثمان صالح  </span>
    </div>
  )
}

export default Username