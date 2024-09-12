
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/features/reports";
import ReportContent from "../reports/report-details/ReportContent";
import { swrRecentReports } from "../swr/recentReports";

export default function ReportDetailsModal() {
  const [openModal, setOpenModal] = useState(true);
  const { mutate } = swrRecentReports()

  const display=useSelector(state=>state.reports.mapReportModal)
  const dispatch =useDispatch()

  return (
    <>
      <Modal className="" size='5xl' show={display} onClose={() => {
                dispatch(actions({action:'mapReportModal',data:false}))
                mutate()


      }


      }>
        <Modal.Header></Modal.Header>
        <Modal.Body>
        <div className="min-h-[80svh]">
        <ReportContent/>

        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={()=>   dispatch(actions({action:'mapReportModal',data:false}))
}>
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
