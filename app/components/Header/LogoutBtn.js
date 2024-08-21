import account, { logout, setAccount } from '@/app/store/features/account'
import { Button } from 'flowbite-react'
import React from 'react'
import { useDispatch } from 'react-redux'

function LogoutBtn() {

const dispatch=useDispatch()
  return (
    <Button
    onClick={()=>{
        dispatch(logout())
    }}
     className='flex items-center gap-x-4 scale-75' size='sm' color="failure" pill>
تسجيل خروج   
 <svg stroke="currentColor"  className="h-6 w-6 rotate-180 flex-shrink-0 fill-white transition duration-75  "fill="currentColor" strokeWidth="0" viewBox="0 0 20 20"  data-testid="flowbite-sidebar-item-icon"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

  </Button>  )
}

export default LogoutBtn