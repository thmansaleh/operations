'use client'
import Cars from "./Cars"
import Drivers from "./Drivers"
// import {ProgressBar} from 'react-customizable-progressbar';

import ReportsCount from "./ReportsCount"
import Sources from "./Sources"
import Streets from "./Streets"
import Types from "./Types"

function Home() {
  return <div className="p-5">
    <div className="flex gap-x-3">
      <ReportsCount/>
      <Drivers/>
      <Cars/>
  
    </div>

    <div className="flex justify-around bg-gray-700  py-5 rounded-lg">
    <Streets/>
    <Sources/>
    <Types/>

    </div>
  </div>
      
  
}

export default Home