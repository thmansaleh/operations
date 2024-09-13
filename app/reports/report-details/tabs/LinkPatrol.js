
"use client";

import { addReportToDb } from "@/app/services/addReport";
import { swrReport } from "@/app/swr/report";
import { Button, Dropdown, Modal } from "flowbite-react";
import { useState } from "react";

export default function LinkPatrol() {
  const [openModal, setOpenModal] = useState(false);
  const { data , error, isLoading,mutate } = swrReport()

  const add = async () => {
    // console.log(report)
    if ( !report.nida   || !report.streetId || !report.sourceId || !report.typeId) {
      toast.error('يرجئ ادخال جميع البيانات', {
        position: "top-center",
        autoClose: 3000,
        rtl: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
      return null
    }
    setLoading(true)
    await addReportToDb(
      report.carId,
      report.id,
      report.nida,
      report.reportNo,
      report.typeId,
      report.streetId,
      report.note,
      report.sourceId,
      report.description,
      report.lat,
      report.lng,
      report.locationName
    )
    setLoading(false)
    toast.success('تم اضافة الحدث بنجاح', {
      position: "top-center",
      autoClose: 3000,
      rtl: true,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });

    mutate()
  }
 if(data) return (
    <>
    
    <Dropdown.Item >ربط الحدث</Dropdown.Item>

      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>

        </Modal.Body>
      </Modal>
    </>
  );
}
