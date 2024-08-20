'use client'
import Cars from "./Cars"
import Drivers from "./Drivers"
// import {ProgressBar} from 'react-customizable-progressbar';

import ReportsCount from "./ReportsCount"
import Streets from "./Streets"

function Home() {
  return <div className="p-5">
    <div className="flex gap-x-3">
      <ReportsCount/>
      <Drivers/>
      <Cars/>
  
    </div>
        <Streets/> 
  </div>
      
  
}

export default Home