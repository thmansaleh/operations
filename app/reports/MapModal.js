
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import MapComponent from "./Map";
import { add as addReport } from "@/app/store/features/addReport"
import { useDispatch } from "react-redux";

export default function MapModal() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch =useDispatch()

const save=()=>{
    dispatch(addReport({action:'modalDispaly',data:true}))
    setOpenModal(false)


}
  return (
    <>
<Button onClick={ ()=>{ 
    setOpenModal(true)
}

} 
size='xs' className='flex justify-center items-center bg-yellow-500' color="warning">
<div className=' flex justify-center items-center'>    انشاء حدث
    </div>
    <svg className='w-7 h-7 mx-1 fill-white' stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M15 12h-2v-2c0-.553-.447-1-1-1s-1 .447-1 1v2h-2c-.553 0-1 .447-1 1s.447 1 1 1h2v2c0 .553.447 1 1 1s1-.447 1-1v-2h2c.553 0 1-.447 1-1s-.447-1-1-1zM19.707 7.293l-4-4c-.187-.188-.441-.293-.707-.293h-8c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-10c0-.266-.105-.52-.293-.707zm-2.121.707h-1.086c-.827 0-1.5-.673-1.5-1.5v-1.086l2.586 2.586zm-.586 11h-10c-.552 0-1-.448-1-1v-12c0-.552.448-1 1-1h7v1.5c0 1.379 1.121 2.5 2.5 2.5h1.5v9c0 .552-.448 1-1 1z"></path></svg>     

  </Button>      <Modal size='7xl' show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
        <div >
      <h1 className=" text-center my-3 font-semibold text-gray-900 ">حدد موقع الحدث</h1>
      <MapComponent />
    </div>

        </Modal.Body>
        <Modal.Footer>
         <div className="flex items-center px-3 gap-x-4"> <Button onClick={save}>حفظ</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            إغلاق
          </Button></div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
