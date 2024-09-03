import { swrReportsToday } from "../swr/reportsToday"

function ReportsCount() {
  const {data,error,isLoading} = swrReportsToday()

if(isLoading) return 'جاري التحميل'
  return (

  <div className="flex items-center p-4 bg-white       gap-x-3    dark:bg-gray-800">
    <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
      <svg className="w-5 h-5" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><g id="View_List"><g><path d="M18.436,20.937H5.562a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.436a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.436,20.937ZM5.562,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.436a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z" /><path d="M6.544,8.283h0a.519.519,0,0,1-.353-.147.5.5,0,0,1,0-.707.512.512,0,0,1,.353-.146H7.55a.516.516,0,0,1,.353.146.5.5,0,0,1,.147.354.5.5,0,0,1-.5.5Z" /><path d="M6.544,12.5h0a.523.523,0,0,1-.353-.146.5.5,0,0,1,0-.708.516.516,0,0,1,.353-.146H7.55a.521.521,0,0,1,.353.146.5.5,0,0,1,0,.708.516.516,0,0,1-.353.146Z" /><path d="M6.544,16.72h0a.519.519,0,0,1-.353-.147.5.5,0,0,1,0-.707.516.516,0,0,1,.353-.146H7.55a.516.516,0,0,1,.353.146.5.5,0,0,1,.147.354.5.5,0,0,1-.5.5Z" /><path d="M10.554,8.281h0a.5.5,0,0,1,0-1h6.9a.5.5,0,0,1,0,1Z" /><path d="M10.554,12.5h0a.5.5,0,0,1,0-1h6.9a.5.5,0,0,1,0,1Z" /><path d="M10.554,16.718h0a.5.5,0,0,1,0-1h6.9a.5.5,0,0,1,0,1Z" /></g></g></svg>
    </div>
    <div>
      <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
        عدد البلاغات 
      </p>
     <div className="font-semibold text-gray-600">
      {data.length}
      
   
 
     </div>
 
  </div>
 
 
</div>  )
}

export default ReportsCount
