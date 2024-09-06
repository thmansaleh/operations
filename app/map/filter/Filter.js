import Patrols from "./Patrols"
import PatrolsOff from "./PatrolsOff"
import PatrolsOutside from "./PatrolsOutsids"
import Recovery from "./Recovery"
import Reports from "./Reports"

function Filter() {
  return (
    <div  className='bg-grady-200 mb-2   gap-x-3 text-xs font-bold items-center justify-center w-full flex'>
      <Patrols/>
      <div className=" bg-gray-300 w-px h-8"></div>
      <PatrolsOff/>
      <div className=" bg-gray-300 w-px h-8"></div>

      <PatrolsOutside/>
      <div className=" bg-gray-300 w-px h-8"></div>

      <Recovery/>
      <div className=" bg-gray-300 w-px h-8"></div>

      <Reports/>
    </div>
  )
}

export default Filter