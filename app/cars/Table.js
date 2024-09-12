import React from 'react'
// import Drivers from './Drivers'
import SingleRow from './SingleRow'

function Test( {cars}) {
  return (
    <div>
        <table class=" w-full  text-xs font-semibold">
  <thead className=' text-center  bg-gray-300  h-8      font-semibold text-gray-950 w-full'>
    <tr >
      <th>الحالة</th>
      <th>الدورية</th>
      <th>السائق</th>
      <th>رقم الهاتف</th>
      <th>وقت استلام الدورية</th>
      <th>اخر تحديث للموقع</th>
      {/* <th>اخر تحديث للموقع</th> */}
      <th>بعد الدورية عن التمركز</th>
      <th>عدد البلاغات</th>
    </tr>
  </thead>
  <tbody className=' text-center'>
    
    {cars.sort((a,b)=>a.nida - b.nida).map(car=>{
        return <SingleRow key={car.nida} car={car}/>
    })}

  </tbody>
</table>
    </div>
  )
}

export default Test