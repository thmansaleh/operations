'use client'
import Cars from "./Cars"
import Drivers from "./Drivers"
import Mechanisms from "./Mechanisms"
import ReportsCount from "./ReportsCount"
import Ratio from "./ratio/Ratio"

function Home() {
  return <div className="p-5">
    <div className="flex gap-x-3">
      <ReportsCount/>
      <Drivers/>
      <Cars/>
      <Mechanisms/>
  
    </div>

   <Ratio/>
  </div>
      
  
}

export default Home