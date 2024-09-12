import { swrReportPlates } from "@/app/swr/plates"
import { Spinner } from "flowbite-react"

function Vehicles() {
  const { data, error, isLoading, mutate } = swrReportPlates()
  if (isLoading) return <div className="flex items-center justify-center w-full pt-4"><Spinner color='success'/></div>
  if (data) {
    if (data.length===0) return <div className="flex items-center font-semibold text-sm justify-center w-full pt-4">لاتوجد مركبات</div>
    if (data.length > 0) return (
        <div className=" w-full">
       
          <table className="  w-full text-xs  font-semibold rounded-lg shadow-lg">
            <thead className="  bg-gray-100 text-ray-700 rounded-lg  border-b ">
              <tr className="  text-center">
                <td className="py-2">رقم المركبة</td>
                <td>مصدر المركبة</td>
                <td>نوع المركبة</td>
                <td>تم ازاحتها بواسطة كرين المواصلات   (نعم,لا)</td>
                <td>رقم الكرين</td>
              </tr>
            </thead>
            <tbody>
            {data.map(car=>{
              return   <tr className=" text-center " key={car.source}>
              <td className="py-2">{car.plate_no}</td>
              <td>{car.plate_source}</td>
              <td>{car.type}</td>
              <td>{car.is_removed=='true'?'نعم':'لا'}</td>
              <td>{car.is_removed=='true'?car.recovery_no:''}</td>
            </tr>
            })}
            </tbody>
          </table>
        </div>

      )
    
  }

}

export default Vehicles