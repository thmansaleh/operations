import React from 'react'
import Username from './Username'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux'
import Drawer from '../drawer/Drawer'

function Header() {
    const period =useSelector(state=>state.account.period)

  return <>
  <Drawer/>
    <div className='w-full  text-black  px-3 py-1  flex items-center'>
<Username/>
{/* <Logo/> */}
<div className='flex-1 text-center text-white font-semibold text-sm'>
    الفترة : {period}
</div>
{/* <LogoutBtn/> */}
    </div>
  
  </>
}

export default Header