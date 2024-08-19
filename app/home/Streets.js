import { swrStreestReorts } from "../swr/streetsReports"

function Streets() {
    const { data , error, isLoading } = swrStreestReorts()
    if(isLoading) 'جاري التحميل'
      // return null
  if(data) return <div>
    <div className="text-gray-600 font-semibold text-md mb-3">الشوارع</div>
 <div className="space-y-3">

    {data.map(street=>{
      return <div key={street.report_count} className="text-sm flex items-center gap-x-2 text-gray-700 font-semibold">
      <div>  
          {street.street_name}
      </div>   
       :
      
      <div className="bg-green-500  text-sm rounded-full w-5 h-5 text-white flex justify-center items-center">    {street.report_count}
      </div>
        </div>


    })}
     </div>

  </div>

}

export default Streets