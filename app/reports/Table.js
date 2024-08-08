import React from 'react'

function Table() {
  return (
<div className="relative overflow-auto max-h-svh  shadow-md ">
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
    {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1].map(e=>{
        return   <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        23973923982
        </th>
    
        <td className="px-6 py-4">
          تحم2
        </td>
        <td className="px-6 py-4">
          مركبة عطلانة
        </td>
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
21
        </td>
        <td className="px-6 py-4">
22:12
        </td>
        <td className="px-6 py-4">
22:12
        </td>
        <td className="px-6 py-4">
22:12
        </td>
        <td className="px-6 py-4">
يقيد انه موجود داخل المركبة        </td>
      </tr>
    })}
     
    </tbody>
  </table>
</div>  )
}

export default Table