
"use client";

import { deleteReport } from "@/app/services/deleteReport";
import { setReportId } from "@/app/store/features/reports";
import { swrReportsToday } from "@/app/swr/reportsToday";
import { Button, Dropdown, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

export default function DeleteReportModal() {
  const [openModal, setOpenModal] = useState(false);
  const reportId=useSelector(state=>state.reports.reportId)
  const { data ,isLoading,mutate } = swrReportsToday()
  const dispatch=useDispatch()

const deleteRp= async()=>{
  await  deleteReport(reportId)
  mutate()
    setOpenModal(false)
    dispatch(setReportId(null))

}

  return (
    <>
          <Dropdown.Item onClick={() => setOpenModal(true)} className=" text-red-500">حذف الحدث</Dropdown.Item>

      {/* <Button gradientMonochrome="failure" size='xs' onClick={() => setOpenModal(true)}>حذف الحدث</Button> */}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
حذف الحدث بشكل نهائي؟
            </h3>
            <div className="flex justify-center gap-4">
            <Button color="gray" onClick={() => setOpenModal(false)}>
                إغلاق
              </Button>
              <Button color="failure" onClick={deleteRp}>
                {"نعم"}
              </Button>
           
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
