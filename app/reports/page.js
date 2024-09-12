'use client'

import Content from './Content'
import Filter from './filter/Filter'
import AddReportBtn from './AddReportBtn'
function page() {

  return <>
    <div className=' space-y-3'>
<div className='flex items-center gap-x-5'>
<AddReportBtn/>
<div className='w-[2px] h-8 bg-gray-300'></div>
<Filter/>
</div>
<Content/>

    </div>
  </>
  
}

export default page