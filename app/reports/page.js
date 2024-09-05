'use client'

import { useDispatch } from 'react-redux'

import MapModal from './MapModal'
import Content from './Content'
function page() {
    const dispatch =useDispatch()

  return <>
    <div className='p-3 space-y-3'>
<MapModal/>
<Content/>

    </div>
  </>
  
}

export default page