'use client'
import Tabs from './components/tabs/Tabs'
import Header from './components/Header/Header'
import Login from './login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { verifyToken } from './services/verifyToken'
import { setAccount } from './store/features/account'
import { useRouter } from 'next/navigation'
import AddReportModal from './components/add-report-modal/AddRportModal'
 function  Content({children}) {
  const dispatch=useDispatch()
  const router=useRouter()
 
    useEffect(() => {
    const token =localStorage.getItem('token')
if(token){
  
  const verivey = async ()=>{
     const data= await verifyToken()
    //  console.log(data)
     if(data.status){
      dispatch(setAccount({account:data.user}))
console.log('loginnn',data)
     }
     return data
  }
  verivey()
}

      return () => {
        null
      }
    }, [])
    
    const login =useSelector(state=>state.account.login)
  //  if(!login) return <Login/>
  return <div>
    <AddReportModal/>
<Header/>
    <div >
    <Tabs/>
    <div className="w-full p-3">  
        {children}
    </div>
  </div>  
  </div>
}

export default Content