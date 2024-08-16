import React from 'react'
import { swrReportsToday } from '../swr/reportsToday'
// import EditBtn from './EditBtn'
import SpinnerLoading from '../components/SpinnerLoading'
import EditBtn from '../reports/EditBtn'

function CarReports({nida}) {
  const { data ,isLoading } = swrReportsToday()
if(isLoading) return <SpinnerLoading/>
if(data){
  const reports=data.filter(report=>report.nida==nida)
  if(reports.length>0) {
    return (
<div className="    shadow-md ">
    <div className='my-3 font-semibold text-center text-md'>الاحداث</div>
  <table className=" text-sm text-center  text-gray-500 ">
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
        <th scope="col" className="px-6 py-3">
          
        </th>
      </tr>
    </thead>
    <tbody>
    {reports.map(report=>{ return   <tr key={report.report_no} className="  border-b">
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
        <td className="px-6 py-4">
        {report.note_police}
        <div>
          <EditBtn report={report}/>
        </div>
    </td>
      </tr>
    })}
     
    </tbody>
  </table>
</div>  )
  }else{
    return <div className='my-3 font-semibold text-center text-md'>لاتوجد احداث</div>
  }
}
}
export default CarReports