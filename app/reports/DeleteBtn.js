import { Modal, Tooltip ,Button} from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { addReport } from '../store/features/reports'
import { useState } from 'react'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HiOutlineExclamationCircle } from "react-icons/hi";
import { deleteReport } from '../services/deleteReport';
import { swrReportsToday } from '../swr/reportsToday';
export default function DeleteBtn({report}) {
  const [openModal, setOpenModal] = useState(false)

    const dispatch =useDispatch()
    const { mutate } = swrReportsToday()


    const remove= async()=>{
await deleteReport(report.id)

toast.success(`تم حذف الحدث ${report.report_no}`, {
  position: "top-center",
  autoClose: 3000,
  rtl:true,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light"
});
setOpenModal(false)
mutate()
    }
  return (
    <>
        <Tooltip content="حذف">

        <svg onClick={() => setOpenModal(true)} className='w-6 h-6  fill-red-500' 
     stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>           </Tooltip>




<Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              هل انت متأكد من حذف الحدث : {report.report_no} ؟
            </h3>
            <div className="flex justify-center gap-4">
            <Button color="gray" onClick={()=>setOpenModal(false)}>
              الغاء
              </Button>
              <Button color="failure" onClick={remove}>
                حذف
              </Button>
          
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
