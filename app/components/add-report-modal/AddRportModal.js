
"use client";

import { Button, Modal, Select } from "flowbite-react";
import { useState } from "react";
import Sources from "./Sources";
import ReportTypes from "./ReportTypes";
import Times from "./Times";
import Nida from "./Nida";
import SaveBtn from "./SaveBtn";
import { addReport } from "@/app/store/features/reports";
import { useDispatch } from "react-redux";
import StreetName from "./StreetName";


export default function AddReportModal({carNida,page}) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch=useDispatch()


  return (
    <>
      <Button gradientMonochrome="info" onClick={() => setOpenModal(true)} className="m-3  ">
      <svg className="w-7 h-7 mx-1" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
      اضافة حدث
  </Button>
      <Modal size='2xl' show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header ></Modal.Header>
        <Modal.Body>
        <div className=" flex gap-y-4 justify-center flex-col items-center">

<Nida/>
  <div className="flex justify-center items-center gap-x-4" >
<Sources/>
<ReportTypes/>
  </div>
  <StreetName/>

<Times/>

  <input onChange={e=>dispatch(addReport({action:'note',data:e.target.value}))} type="text" className=" focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-1/2 p-2.5  text-center" placeholder="الملاحظات" />

</div>        </Modal.Body>
        <Modal.Footer>
      <SaveBtn/>
        </Modal.Footer>
      </Modal>
    </>
  );
}
