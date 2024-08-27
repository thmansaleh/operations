
"use client";

import { Button, Modal, Tooltip } from "flowbite-react";
import { useState } from "react";
import CarReports from "./CarReports";
import Location from "./Location";
import { deleteUserFromCarsHistory } from "../services/deleteUserFromCarsHistory";
import { swrCars } from "../swr/cars";

export default function CarDetails({car}) {
  const [openModal, setOpenModal] = useState(false);
  const { mutate } = swrCars()

  const deleteDriver=async(jobId)=>{
    await deleteUserFromCarsHistory(jobId)
    // setOpenModal(false)
    mutate()
   
   }
  return (
    <>
      <Tooltip content="تفاصيل الدورية">

<svg  onClick={() => setOpenModal(true)} className='w-6 h-6 fill-gray-600' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
</Tooltip>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal size='4xl' show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header >
            
        </Modal.Header>
        <div className="text-center my-3 font-semibold text-md"> الدورية : {car.nida}</div>
        <Modal.Body>
          <div className="space-y-6">
          <div className="text-sm font-semibold text-gray-800">
            وقت الاستلام: 
            {car.date}
            </div>

            <Location car={car}/>
         <div className=" w-fit  space-y-3">
            <h2 className="font-semibold text-sm ">خبراء السير</h2>
         <div className="space-y-3">
   <div className="flex gap-x-3  items-center">
<div  className="text-sm">{car.driver_name}
</div>
<div  className="text-sm">رقم الهاتف :{car.driver_phone}
</div>
    </div>      

{car.extra_driver_name?<div className="flex gap-x-3  items-center">
<div  className="text-sm">{car.extra_driver_name}
</div>
<div  className="text-sm">رقم الهاتف :{car.extra_driver_phone}
</div>
    </div> 
:null}


</div>
         </div>


         <CarReports nida={car.nida}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            اغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
