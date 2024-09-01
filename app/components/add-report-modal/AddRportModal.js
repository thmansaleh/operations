
"use client";

import { Button, Modal, Select } from "flowbite-react";
import { useState } from "react";
import Sources from "./Sources";
import ReportTypes from "./ReportTypes";
import Times from "./Times";
import Nida from "./Nida";
import SaveBtn from "./SaveBtn";
import { addReport } from "@/app/store/features/reports";
import { useDispatch, useSelector } from "react-redux";
import StreetName from "./StreetName";
import ReportNoInput from "./ReportNoInput";


export default function AddReportModal() {
  const [openModal, setOpenModal] = useState(false);
  const modalDispaly =useSelector(state=>state.reports.modalDispaly)
  const report =useSelector(state=>state.reports.addReport)
  const dispatch=useDispatch()


  return (
    <>
  

      <Modal size='2xl' show={modalDispaly} onClose={() =>      dispatch(addReport({action:'modalDispaly',data:false}))
}>
        <Modal.Header ></Modal.Header>
        <Modal.Body>
        <div className=" flex gap-y-4 justify-center flex-col items-center">
<div className="flex justify-center items-center gap-x-4">
  
<ReportNoInput/>
<Nida />
</div>
  <div className="flex justify-center items-center gap-x-4" >
<Sources/>
<ReportTypes/>
  </div>
  <StreetName/>

<Times/>

  <input value={report.note} onChange={e=>dispatch(addReport({action:'note',data:e.target.value}))} type="text" className=" focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-1/2 p-2.5  text-center" placeholder="الملاحظات" />

</div>        </Modal.Body>
        <Modal.Footer>
      <SaveBtn/>
        </Modal.Footer>
      </Modal>
    </>
  );
}
