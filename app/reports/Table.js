import React from 'react'
import { swrReportsToday } from '../swr/reportsToday'
import EditBtn from './EditBtn'
import SpinnerLoading from '../components/SpinnerLoading'
import DeleteBtn from './DeleteBtn'
import DuplicateBtn from './DuplicateBtn'
import { useSelector } from 'react-redux'

function Table() {
  const period =useSelector(state=>state.account.period)
  const { data ,isLoading } = swrReportsToday(period)
if(isLoading) return <SpinnerLoading/>
if(data.length==0) return <div className='text-center mt-5 text-lg text-gray-700 font-semibold'>لاتوجد احداث</div>
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
          النداء
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
        {!report.start?<div
        className='w-2 h-2 bg-yellow-400 rounded-full'></div>:report.start}
        </td>
        <td className="px-6 py-4">
        {!report.arrive?<div
        className='w-2 h-2 bg-yellow-400 rounded-full'></div>:report.arrive}
        </td>
        <td className="px-6 py-4">
        {!report.finish?<div
        className='w-2 h-2 bg-yellow-400 rounded-full'></div>:report.finish}
        </td>
        <td className="px-6 py-4">
        {report.note_police}
    </td>
        <td className="px-6 py-4">
        <div className='flex items-center justify-center gap-x-4'>
          <EditBtn report={report}/>
          <DeleteBtn report={report}/>
          <DuplicateBtn report={report}/>
        </div>
    </td>
      </tr>
    })}
     
    </tbody>
  </table>
</div>  )
}

export default Table