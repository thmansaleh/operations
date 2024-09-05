
function Phones({car}) {
    
    if(car.is_match) return (
       <div className="space-y-3 text-sm font-semibold">
   <div className=""> {car.driver_phone}</div>
   {car.extra_driver_name&&<div> {car.extra_driver_phone}</div>
   }
       </div>
     )
     return ''
   }
   
   export default Phones