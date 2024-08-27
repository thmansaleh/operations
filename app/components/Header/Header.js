import React from 'react'
import Username from './Username'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux'

function Header() {
    const period =useSelector(state=>state.account.period)

  return (
    <div className='w-full bg-gray-700 p-2  flex items-center'>
<Username/>
{/* <Logo/> */}
<div className='flex-1 text-center text-white font-semibold text-sm'>
    الفترة : {period}
</div>
<LogoutBtn/>
    </div>
  )
}

export default Header