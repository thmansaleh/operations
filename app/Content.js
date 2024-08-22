import Tabs from './components/tabs/Tabs'
import Header from './components/Header/Header'
import Login from './login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { verifyToken } from './services/verifyToken'
import { setAccount } from './store/features/account'
import { useRouter } from 'next/navigation'

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
   if(!login) return <Login/>
  return <div>
<Header/>
    <div className="flex">
    <Tabs/>
    <div className="flex-1  ">    {children}
    </div>
  </div>  
  </div>
}

export default Content