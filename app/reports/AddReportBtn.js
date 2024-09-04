import { Button } from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux'
import { add as addReport } from '@/app/store/features/addReport'

function AddReportBtn() {
    const dispatch =useDispatch()
    const report =useSelector(state=>state)

  return <Button onClick={ ()=>{
    console.log(report)
//  dispatch(addReport({action:'page',data:'cars'}))
 dispatch(addReport({action:'modalDispaly',data:true}))

}
}  className='flex justify-center items-center bg-yellow-500' color="warning">
<div className=' flex justify-center items-center'>    انشاء حدث
    </div>
    <svg className='w-7 h-7 mx-1 fill-white' stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M15 12h-2v-2c0-.553-.447-1-1-1s-1 .447-1 1v2h-2c-.553 0-1 .447-1 1s.447 1 1 1h2v2c0 .553.447 1 1 1s1-.447 1-1v-2h2c.553 0 1-.447 1-1s-.447-1-1-1zM19.707 7.293l-4-4c-.187-.188-.441-.293-.707-.293h-8c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-10c0-.266-.105-.52-.293-.707zm-2.121.707h-1.086c-.827 0-1.5-.673-1.5-1.5v-1.086l2.586 2.586zm-.586 11h-10c-.552 0-1-.448-1-1v-12c0-.552.448-1 1-1h7v1.5c0 1.379 1.121 2.5 2.5 2.5h1.5v9c0 .552-.448 1-1 1z"></path></svg>     

  </Button>
  
}

export default AddReportBtn