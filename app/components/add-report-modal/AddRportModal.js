
"use client";

import { Modal, Select } from "flowbite-react";
import { useState } from "react";
import Sources from "./Sources";
import ReportTypes from "./ReportTypes";
import Nida from "./Nida";
import SaveBtn from "./SaveBtn";
import { add as addReport } from "@/app/store/features/addReport";
import { useDispatch, useSelector } from "react-redux";
import StreetName from "./StreetName";
import Description from "./Description";
import Note from "./Note";
import SelectCar from "./SelectCar";
import LocationName from "./LocationName";


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
          <table>
            <tbody className=" text-sm font-semibold">
              <LocationName/>
             <tr className="py-2">
             <Sources/>
             <ReportTypes/>
             </tr >
          
             <tr > 
             <StreetName/>
             <Description/>
             </tr>
             <tr > 
             <Note/>
             </tr>
         
            </tbody>
          </table>
       
<SelectCar/>


    </Modal.Body>
        <Modal.Footer>
      <SaveBtn/>
        </Modal.Footer>
      </Modal>
    </>
  );
}
