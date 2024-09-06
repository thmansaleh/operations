
function Drivers({car}) {
    
 if(car.is_match) return <>

<div >السائق: {car.driver_name}</div>
{car.extra_driver_name?<div>المرافق: {car.extra_driver_name}</div>
:null}
  </>
  
  return ''
}

export default Drivers