import { swrStreestReorts } from "@/app/swr/streetsReports"

function Streets() {
    const { data , error, isLoading } = swrStreestReorts()
    if(isLoading) 'جاري التحميل'
      // return null
      if(data) return <div>
    <div className=" text-center flex items-center font-semibold text-sm justify-center gap-x-4 my-3">
    الشوارع
    <svg className="h-5 w-5" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M168.4 29.55L24.38 477.6l15.24 4.8L183.6 34.45l-15.2-4.9zm175.2 0l-15.2 4.9 144 447.95 15.2-4.8-144-448.05zM248 32l-.8 20h17.6l-.8-20h-16zm-1.4 36l-.8 20h20.4l-.8-20h-18.8zm-1.5 36l-1.3 32h24.4l-1.3-32h-21.8zm-1.9 48l-2 48h29.6l-2-48h-25.6zm-2.8 68l-2.4 60h36l-2.4-60h-31.2zm-3.3 84l-2.9 72h43.6l-2.9-72h-37.8zm-4 100l-3.1 76h52l-3.1-76h-45.8z"></path></svg>
        </div>
       <table className=" border text-center text-sm w-64  text-gray-600">
      <thead className=" text-center">
        <tr className=" text-center text-gray-800">
          <th>الشارع</th>
          <th>عدد البلاغات</th>
        </tr>
      </thead>
      <tbody className=" text-center">
      {data.map(street=>{
        return  <tr className="  border-b text-center">
      <td>{street.street_name} </td>
      <td >{street.report_count}</td>
    </tr>


})}
      
      </tbody>
    </table>
</div>



}

export default Streets