import { Avatar } from 'flowbite-react'
import React from 'react'
import { useSelector } from 'react-redux'

function Username() {
    const name =useSelector(state=>state.account.account.name)
    // console.log(name)

  return (
    <div className=' flex items-center gap-x-4 text-white text-sm font-semibold'>
        <Avatar rounded/>
        <span>مرحــبا,  {name}  </span>
    </div>
  )
}

export default Username