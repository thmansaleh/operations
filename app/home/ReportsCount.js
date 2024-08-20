import { swrReportsToday } from "../swr/reportsToday"

function ReportsCount() {
  const {data,error,isLoading} = swrReportsToday()

if(isLoading) return 'جاري التحميل'
  return (

  <div className="flex items-center p-4 bg-white rounded-lg gap-x-3    dark:bg-gray-800">
    <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
      <svg className="w-5 h-5" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><g id="View_List"><g><path d="M18.436,20.937H5.562a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.436a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.436,20.937ZM5.562,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.436a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z" /><path d="M6.544,8.283h0a.519.519,0,0,1-.353-.147.5.5,0,0,1,0-.707.512.512,0,0,1,.353-.146H7.55a.516.516,0,0,1,.353.146.5.5,0,0,1,.147.354.5.5,0,0,1-.5.5Z" /><path d="M6.544,12.5h0a.523.523,0,0,1-.353-.146.5.5,0,0,1,0-.708.516.516,0,0,1,.353-.146H7.55a.521.521,0,0,1,.353.146.5.5,0,0,1,0,.708.516.516,0,0,1-.353.146Z" /><path d="M6.544,16.72h0a.519.519,0,0,1-.353-.147.5.5,0,0,1,0-.707.516.516,0,0,1,.353-.146H7.55a.516.516,0,0,1,.353.146.5.5,0,0,1,.147.354.5.5,0,0,1-.5.5Z" /><path d="M10.554,8.281h0a.5.5,0,0,1,0-1h6.9a.5.5,0,0,1,0,1Z" /><path d="M10.554,12.5h0a.5.5,0,0,1,0-1h6.9a.5.5,0,0,1,0,1Z" /><path d="M10.554,16.718h0a.5.5,0,0,1,0-1h6.9a.5.5,0,0,1,0,1Z" /></g></g></svg>
    </div>
    <div>
      <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
        عدد البلاغات 
      </p>
     <div className="font-semibold text-gray-600">
      {data.length}
      
   {/* {data.map(source=>{
    return   <div key={source.report_count} className="text-sm flex items-center gap-x-2 text-gray-700 font-semibold">
<div>  
    {source.source_name}
</div>   
 :

<div className="bg-green-500  text-sm rounded-full w-5 h-5 text-white flex justify-center items-center">    {source.report_count}
</div>
  </div>
   })} */}
 
     </div>
 
  </div>
 
 
</div>  )
}

export default ReportsCount


// <div className="flex items-center p-4 bg-white rounded-lg gap-x-3   shadow-xs dark:bg-gray-800">
// <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
//   <svg className="h-5 w-5" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
// </div>
// <div>
//   <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
//     خبراء السير
//   </p>
//   <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
// 102
//   </p>
// </div>
// </div>