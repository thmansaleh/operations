import React from 'react'
import Tabs from './components/tabs/Tabs'
import Header from './components/Header/Header'

function Content({children}) {
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