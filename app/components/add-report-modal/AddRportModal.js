
"use client";

import { Button, Modal, Select } from "flowbite-react";
import { useState } from "react";
import Sources from "./Sources";
import ReportTypes from "./ReportTypes";
import Nida from "./Nida";
import SaveBtn from "./SaveBtn";
import { add as addReport } from "@/app/store/features/addReport";
import { useDispatch, useSelector } from "react-redux";
import StreetName from "./StreetName";
import LatAndLng from "./LatAndLng";
import Description from "./Description";
import Note from "./Note";
import SelectCar from "./SelectCar";
import SelectPatrol from "./SelectPatrol";


export default function AddReportModal() {
  const [openModal, setOpenModal] = useState(false);
  const modalDispaly =useSelector(state=>state.addReport.modalDispaly)
  const report =useSelector(state=>state.addReport)
  const dispatch=useDispatch()


  return (
    <>
  

      <Modal position='top-center' size='5xl' show={modalDispaly} onClose={() =>      dispatch(addReport({action:'modalDispaly',data:false}))
}>
        <Modal.Header ></Modal.Header>
        <Modal.Body>
          <LatAndLng/>
        <div className=" flex  gap-x-20">
          <div className="space-y-3">
          <ReportTypes/>
          <StreetName/>
          <Description/>

          </div>

          <div className="space-y-3">
          <Sources/>
          {/* <SelectPatrol/> */}
          {/* <Nida /> */}

          </div>

  
{/* <Times/> */}


</div>
<Note/>
<SelectCar/>


    </Modal.Body>
        <Modal.Footer>
      <SaveBtn/>
        </Modal.Footer>
      </Modal>
    </>
  );
}
