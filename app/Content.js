import React from 'react'
import Tabs from './components/tabs/Tabs'
import Header from './components/Header/Header'
import Login from './login/Login'
import { useSelector } from 'react-redux'

function Content({children}) {
    
    const login =useSelector(state=>state.account.login)
   if(!login) return <Login/>
  return <div>
<Header/>
    <div className="flex">
    <Tabs/>
    <div className="flex-1 ">    {children}
    </div>
  </div>  
  </div>
}

export default Content