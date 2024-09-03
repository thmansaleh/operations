
function Drivers({car}) {
    
 if(car.is_match) return (
    <div className="flex justify-center items-center flex-col gap-y-3   font-semibold text-center">
<div className=" bg-green-500 text-white rounded-lg w-fit px-1">السائق: {car.driver_name}</div>
{car.extra_driver_name&&<div className="bg-green-500 text-white rounded-lg w-fit px-1">المرافق: {car.extra_driver_name}</div>
}
    </div>
  )
  return ''
}

export default Drivers