'use client'
import Informations from "./Informations"
// import {ProgressBar} from 'react-customizable-progressbar';

import ReportsCount from "./ReportsCount"
import Streets from "./Streets"

function Home() {
  return <div className="p-5">
    <div className="  ">
        <Informations/>
        <Streets/> 
        
  
    </div>
  </div>
      
  
}

export default Home