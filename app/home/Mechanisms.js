import { swrCars } from "../swr/cars"

function Mechanisms() {
    
    const {data,error,isLoading} = swrCars()

    if(isLoading) return 'loding'
 if(data){
const count =data.filter(e=>e.is_match& e.type!='patrol')
    
  return (
    <div className="flex items-center p-4 bg-white      gap-x-3   ">
   <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full ">
   <svg className="h-5 w-5" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M80.08 82.66L60.24 102.5 192.9 242.7v58.6h78v-50.9zm-25.4 40.14v80.3l4.01 2.7c10.56 7 14.74 14.1 15.93 19.8 1.18 5.8-.43 10.8-3.85 14.9-6.86 8.3-19.91 12.3-32.73-.6l-12.72 12.8c19.18 19.1 46.13 15.1 59.27-.6 6.58-7.9 9.97-18.9 7.65-30.1-2.05-10-8.72-19.7-19.56-28v-52.2zm258.02 52.5v144h-185c22.6 5.8 40.6 23.5 46.7 46H337c7.5-27.6 32.8-48 62.7-48 29.9 0 55.2 20.4 62.7 48h24.3v-84.6l-60.2-105.4zm36 14h62.1l54.7 92H348.7v-83zm-321.49 130l11.5 46h10.25c6.12-22.5 24.09-40.2 46.74-46zm84.49 16c-26.08 0-47.02 20.9-47.02 47s20.94 47 47.02 47c26.1 0 47-20.9 47-47s-20.9-47-47-47zm288 0c-26.1 0-47 20.9-47 47s20.9 47 47 47 47-20.9 47-47-20.9-47-47-47z"></path></svg>

   {/* <svg className="h-5 w-5" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M96,24a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,24Zm152,88a8,8,0,0,1-8,8h-8v80a16,16,0,0,1-16,16H192a16,16,0,0,1-16-16v-8H80v8a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V120H16a8,8,0,0,1,0-16H27.36L54.75,56.06A16,16,0,0,1,68.64,48H187.36a16,16,0,0,1,13.89,8.06L228.64,104H240A8,8,0,0,1,248,112ZM88,144a8,8,0,0,0-8-8H56a8,8,0,0,0,0,16H80A8,8,0,0,0,88,144Zm120,0a8,8,0,0,0-8-8H176a8,8,0,0,0,0,16h24A8,8,0,0,0,208,144Zm2.21-40L187.36,64H68.64L45.79,104Z"></path></svg>    */}
     </div>
    <div>
      <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
       الأليات
     </p>
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
{count.length}
     </p>
    </div>
    </div>
    )
}
}

export default Mechanisms