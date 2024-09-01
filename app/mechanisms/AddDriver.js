
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
// import { swrDrivers } from "../swr/drivers";
// import { swrPatrols } from "../swr/patrols";
import { addToCarsHistory } from "../services/addToCarsHistory";
import { deleteUserFromCarsHistory } from "../services/deleteUserFromCarsHistory";
import { swrMechanismsDrivers } from "../swr/swrMechanismsDrivers";
import { swrCars } from "../swr/cars";


export default function CarModal({car}) {
  const period=localStorage.getItem('period')
  const [openModal, setOpenModal] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const { data , error, isLoading, } = swrMechanismsDrivers()
  const { mutate } = swrCars(period)

  if(error) return 'errore'

const serach=(value)=>{
 if(value.length>1){
  const newSearch = data.filter(driver => 
    driver.name.toLowerCase().includes(value.toLowerCase()) || 
    driver.phone.toString().includes(value) || 
    driver.job_id.toString().includes(value)
  )
  setDrivers(newSearch)
 }

}

const addDriver=async (jobId,position)=>{
  await addToCarsHistory(car.car_history_id,car.nida,jobId,position)
  setOpenModal(false)
    mutate()
  setDrivers([])

}


const deleteDriver=async(position)=>{
 await deleteUserFromCarsHistory(car.car_history_id,position)
 mutate()
 setOpenModal(false)

}
  return (
    <>
      <Button  onClick={() => setOpenModal(true)}  className="h-7 w-7  flex justify-center items-center rounded-full " color={car.is_match
?"success":"warning"}>{car.nida}</Button>
   
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header ></Modal.Header>
        <Modal.Body>
<div className="flex items-center flex-col gap-y-3 justify-center">
  <input onChange={e=>serach(e.target.value)} type="text" className="bg-gray-50 border focus:border-gray-800 border-gray-300 focus:ring-gray-800 text-gray-900 text-sm rounded-lg  w-26 p-2.5  text-center" placeholder="الاسم" />

 
{drivers.length>0?<div className=" rounded-lg p-2 space-y-5">
  {drivers.map(e=>{
    return <div  key={e.job_id+Math.random()} className="flex items-center gap-x-3">
    <div className="flex-1 ">{e.name}</div>

    <Button  onClick={()=>addDriver(e.job_id,car.is_match?'extraDriver':'mainDriver')} size="xs" color="success" >
        {car.is_match?'اضافة مرافق':'اضافة سائق'}
      </Button>

  </div>
  })}
</div>:null}


{car.is_match?<div className="space-y-3">
  <div  className="flex items-center gap-x-3">
    <div className="flex-1 bg-green-600 text-white rounded-lg p-1 text-sm">
    السائق : 

      {car.driver_name}</div>
    <Button  onClick={()=>deleteDriver('mainDriver')} size="xs" color="failure" >
        حذف
      </Button>
  </div>

  {car.extra_driver_name&&  <div  className="flex items-center gap-x-3">

  <div className="flex-1 bg-green-600 text-white rounded-lg p-1 text-sm">
    المرافق:
    {car.extra_driver_name}
 
  </div>
  <Button onClick={()=>deleteDriver('extraDriver')} size="xs" color="failure" >
        حذف
      </Button>
  </div>}
  </div>:null
  }




</div>
          </Modal.Body>
        {/* <Modal.Footer>
          <Button gradientMonochrome="success" onClick={() => setOpenModal(false)}>حفظ</Button>
   
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
