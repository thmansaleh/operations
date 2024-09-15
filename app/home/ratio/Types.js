import { swrTypesReports } from "@/app/swr/typesReports"
import { Spinner } from "flowbite-react"

function Types() {
    const { data , error, isLoading } = swrTypesReports()
    if(isLoading) return <Spinner color="success" />
      // return null
      if(data) return <div>
    <div className=" text-center flex items-center font-semibold text-sm justify-center gap-x-4 my-3">
    <svg className="w-5 h-5" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 5v9h-5v5H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2zm-7 11H7v-2h5v2zm5-4H7V8h10v2z"></path></svg>
        نوع الحدث
      </div>
       <table className=" text-center text-sm w-64  border text-gray-600">
      <thead className=" text-center">
        <tr className=" text-center text-gray-800">
          <th>النوع</th>
          <th>عدد البلاغات</th>
        </tr>
      </thead>
      <tbody className=" text-center">
      {data.map(type=>{
        return  <tr key={type.report_count * Math.random() +2} className="  border-b text-center">
      <td>{type.type} </td>
      <td >{type.report_count}</td>
    </tr>


})}
      
      </tbody>
    </table>
</div>
}

export default Types