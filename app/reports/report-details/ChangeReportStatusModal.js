
"use client";

import { changeReportStatus } from "@/app/services/changeReportStatus";
import { swrReport } from "@/app/swr/report";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function ChangeReportStatusModal({button}) {
  const [openModal, setOpenModal] = useState(false);
  const { data , error, isLoading,mutate } = swrReport()

const changeStatus=async()=>{
    const action= !data.start?'start':!data.arrive?'arrive':'finish'

 const req = await changeReportStatus(data.id,action)
 mutate()
 setOpenModal(false)
}
 if(data) return (
    <>
   {!data.finish?<Button gradientMonochrome="success" size='xs' className="w-full mt-7" onClick={() => setOpenModal(true)}>
    {button}
      </Button>:null}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                هل انت متأكد من {button} ؟
             

            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"إغلاق"}
              </Button>
              <Button gradientMonochrome="success" onClick={changeStatus}>
                موافق
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
