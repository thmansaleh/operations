
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { swrDrivers } from "../swr/drivers";
import { swrCars } from "../swr/cars";
import { addToCarsHistory } from "../services/addToCarsHistory";
import { deleteUserFromCarsHistory } from "../services/deleteUserFromCarsHistory";


export default function AddDriver({car}) {
  const [openModal, setOpenModal] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const { data , error, isLoading, } = swrDrivers()
  const { mutate } = swrCars()

  if(error) return 'errore'

const serach=(value)=>{
 if(value.length>2){
  const newSearch = data.filter(driver => 
    driver.name.toLowerCase().includes(value.toLowerCase()) || 
    driver.phone.toString().includes(value) || 
    driver.job_id.toString().includes(value)
  )
  setDrivers(newSearch)
 }

}

const addDriver=async (jobId)=>{
  await addToCarsHistory(car.nida,jobId)
  mutate()
  setOpenModal(false)

}


const deleteDriver=async(jobId)=>{
 await deleteUserFromCarsHistory(jobId)
 setOpenModal(false)
 mutate()

}
  return (
    <>
      <Button    className="h-7 w-7  flex justify-center items-center rounded-full " color={car.is_match
?"success":"warning"}>{car.nida}</Button>
   
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header ></Modal.Header>
        <Modal.Body>
<div className="flex items-center flex-col gap-y-3 justify-center">
  <input onChange={e=>serach(e.target.value)} type="text" className="bg-gray-50 border focus:border-gray-800 border-gray-300 focus:ring-gray-800 text-gray-900 text-sm rounded-lg  w-26 p-2.5  text-center" placeholder="اسم خبير السير" />

 
{drivers.length>0?<div className=" rounded-lg p-2 space-y-5">
  {drivers.map(e=>{
    return <div  key={e.job_id} className="flex items-center gap-x-3">
    <div className="flex-1">{e.name}</div>
    <Button  onClick={()=>addDriver(e.job_id)} size="xs" color="warning" >
        اضافة
      </Button>
  </div>
  })}
</div>:null}


{car.match_found?<>
<div>
{car.drivers.map(driver=>{
    return      <div key={driver.job_id}  className="flex items-center gap-x-3">
    <div className="flex-1 bg-green-600 text-white rounded-lg p-1 text-sm">{driver.name}</div>
    <Button onClick={()=>deleteDriver(driver.job_id)} size="xs" color="failure" >
        حذف
      </Button>
  </div>
    
})}
</div>

</>
:null
}




</div>
          </Modal.Body>
        <Modal.Footer>
          <Button gradientMonochrome="success" onClick={() => setOpenModal(false)}>حفظ</Button>
   
        </Modal.Footer>
      </Modal>
    </>
  );
}
