import { swrSourcesReports } from "@/app/swr/sourcesReports"
import { Spinner } from "flowbite-react"

function Sources() {
    const { data , error, isLoading } = swrSourcesReports()
    if(isLoading) return <Spinner color="success" />
      // return null
      if(data) return <div className=" ">
    <div className=" text-center flex items-center font-semibold text-sm justify-center gap-x-4 my-3">
    مصدر الأحداث
    <svg className="w-5 h-5" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M16.616 13.924a5 5 0 1 0 -9.23 0"></path><path d="M20.307 15.469a9 9 0 1 0 -16.615 0"></path><path d="M9 21l3 -9l3 9"></path><path d="M10 19h4"></path></svg>          

    </div>
       <table className=" text-center text-sm w-64 border rounded-lg  text-gray-600">
      <thead className=" text-center">
        <tr className=" text-center text-sm  text-gray-800">
          <th>المصدر</th>
          <th>عدد البلاغات</th>
        </tr>
      </thead>
      <tbody className=" text-center">
      {data.map(source=>{
        return  <tr className="  border-b text-center">
      <td>{source.source_name} </td>
      <td >{source.report_count}</td>
    </tr>


})}
      
      </tbody>
    </table>
</div>
}

export default Sources