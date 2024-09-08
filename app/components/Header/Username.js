import { setSetting } from '@/app/store/features/setting'
import { Avatar } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Username() {
    const name =useSelector(state=>state.account.account.name)
    const dispatch=useDispatch()
const openDrawer=()=>{
  dispatch(setSetting({action:'drawerDisplay',data:true}))

}
  return (
    <div className=' flex items-center gap-x-4 text-black text-sm font-semibold'>
        <Avatar onClick={openDrawer} size='sm' rounded/>
        {/* <span>مرحــبا,  {name}  </span> */}
    </div>
  )
}

export default Username