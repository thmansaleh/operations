import React from 'react'
import { swrReportsToday } from '../swr/reportsToday'

function Table() {
  const { data ,isLoading } = swrReportsToday()
if(isLoading) return 'loading'
  return (
<div className="    shadow-md ">
  <table className="w-full text-sm text-center  text-gray-500 ">
    <thead className="text-xs text-white uppercase bg-gray-600 ">
      <tr>
    
        <th scope="col" className="px-6 py-3">
          رقم الحدث
        </th>
        <th scope="col" className="px-6 py-3">
          مصدر الحدث
        </th>
        <th scope="col" className="px-6 py-3">
          نوع الحدث
        </th>
        <th scope="col" className="px-6 py-3">
          الدورية
        </th>
        <th scope="col" className="px-6 py-3">
          الاستلام
        </th>
        <th scope="col" className="px-6 py-3">
          الوصول
        </th>
        <th scope="col" className="px-6 py-3">
          الانتهاء
        </th>
        <th scope="col" className="px-6 py-3">
          ملاحظات
        </th>
      </tr>
    </thead>
    <tbody>
    {data.map(report=>{
        return   <tr className="  border-b">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {report.report_no}
        </th>
    
        <td className="px-6 py-4">
        {report.source_name}
        </td>
        <td className="px-6 py-4">
        {report.type}
        </td>
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {report.nida}

        </td>
        <td className="px-6 py-4">
        {report.start}
        </td>
        <td className="px-6 py-4">
        {report.arrive}
        </td>
        <td className="px-6 py-4">
        {report.finish}
        </td>
        <td className="px-6 py-4">
        {report.note_police}
    </td>
      </tr>
    })}
     
    </tbody>
  </table>
</div>  )
}

export default Table