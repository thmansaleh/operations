import { addReportToDb } from '@/app/services/addReport'
import { add as addReport } from '@/app/store/features/addReport'
import { swrReportsToday } from '@/app/swr/reportsToday'
import { Button } from 'flowbite-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SaveBtn({ index }) {
  const { mutate } = swrReportsToday()

  const report = useSelector(state => state.addReport)
  // const period=useSelector(state=>state.account.period)

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const add = async () => {
    console.log(report)
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

    dispatch(addReport({ action: 'modalDispaly', data: false }))
    mutate()
  }
  return <>

    <Button isProcessing={loading} gradientMonochrome="success" size='sm' onClick={add}>إنشاء حدث</Button>
  </>

}

export default SaveBtn