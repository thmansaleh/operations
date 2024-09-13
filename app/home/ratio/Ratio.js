import Streets from './Streets'
import Sources from './Sources'
import Types from './Types'
import CarsReportsCount from './CarsReportsCount'

function Ratio() {
  return <>
  <div className=' text-center mt-4 font-semibold text-base text-gray-700'>البلاغات</div>
    <div className="flex justify-around   shadow-md text-sm  py-5 ">
     <Streets/>
    <Sources/>
    <Types/>
    <CarsReportsCount/> 
   

    </div>  
  </>
}

export default Ratio