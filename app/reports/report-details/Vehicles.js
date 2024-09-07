import { swrReportPlates } from "@/app/swr/plates"

function Vehicles() {
  const { data, error, isLoading, mutate } = swrReportPlates()
  if (data) console.log('from plates', data)
  if (data) {
    if (data.length > 0) {
      return (
        <div className=" w-full">
       
          <table className="  w-full text-xs  font-semibold rounded-lg shadow-lg">
            <thead className="  bg-gray-100 text-ray-700 rounded-lg  border-b ">
              <tr className="  text-center">
                <td className="py-2">رقم المركبة</td>
                <td>مصدر المركبة</td>
                <td>نوع المركبة</td>
              </tr>
            </thead>
            <tbody>
            {data.map(car=>{
              return   <tr className=" text-center " key={car.source}>
              <td className="py-2">{car.plate_no}</td>
              <td>{car.plate_source}</td>
              <td>{car.type}</td>
            </tr>
            })}
            </tbody>
          </table>
        </div>

      )
    }
  }

}

export default Vehicles