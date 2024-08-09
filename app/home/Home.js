'use client'
// import {ProgressBar} from 'react-customizable-progressbar';

import ReportsCount from "./ReportsCount"
import Streets from "./Streets"

function Home() {
  return <div className="p-3">
    <h1 className="text-center font-semibold my-3">البلاغات</h1>
    <div className="flex  shadow-md">
        <ReportsCount/>
        <Streets/>
  
    </div>
  </div>
      
  
}

export default Home