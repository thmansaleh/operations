import { swrStreestReorts } from "../swr/streetsReports"

function Streets() {
    const { data , error, isLoading } = swrStreestReorts()
    if(isLoading) 'جاري التحميل'
      // return null
  if(data) return <div>
 <div className="space-y-3">
 <div className=" bg-white py-2 rounded-lg font-semibold text-sm text-center w-44">الشوارع</div>

    {data.map(street=>{
      return <div key={street.report_count} className="text-sm justify-center flex items-center gap-x-2 text-white font-semibold">
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