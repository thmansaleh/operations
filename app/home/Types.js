import { swrTypesReports } from "../swr/typesReports"

function Types() {
    const { data , error, isLoading } = swrTypesReports()
    if(isLoading) 'جاري التحميل'
      // return null
  if(data) return <div className="">
 <div className="space-y-3">
 <div className=" bg-white py-2 rounded-lg font-semibold text-sm text-center w-44">نوع البلاغ</div>

    {data.map(type=>{
      return <div key={type.report_count} className="text-sm  justify-center flex items-center gap-x-2 text-white font-semibold">
      <div>  
          {type.type}
      </div>   
       :
      
      <div className="bg-green-500  text-sm rounded-full w-5 h-5 text-white flex justify-center items-center">    {type.report_count}
      </div>
        </div>


    })}
     </div>

  </div>

}

export default Types