import { swrSourcesReports } from "../swr/sourcesReports"
import { swrStreestReorts } from "../swr/streetsReports"

function Sources() {
    const { data , error, isLoading } = swrSourcesReports()
    if(isLoading) 'جاري التحميل'
      // return null
  if(data) return <div>
 <div className="space-y-3">
    
<div className=" bg-white py-2 rounded-lg font-semibold text-sm text-center w-44">المصدر</div>
    {data.map(source=>{
      return <div key={source.report_count} className="text-sm flex items-center justify-center gap-x-2 text-white font-semibold">
      <div>  
          {source.source_name}
      </div>   
       :
      
      <div className="bg-green-500  text-sm rounded-full w-5 h-5 text-white flex justify-center items-center">    {source.report_count}
      </div>
        </div>


    })}
     </div>

  </div>

}

export default Sources