
import { useEffect } from 'react'
import { getDistanceFromCenter } from '../services/getDistanceFromCenter'

function Distance({car}) {
    
    const distance=getDistanceFromCenter(car.lat,car.lng,car.current_lat,car.current_lng)
   useEffect(() => {
   }, [])
   if(car.is_match) return <div className=''>
{`
${ distance}

km 
`}
    
   </div>
}

export default Distance