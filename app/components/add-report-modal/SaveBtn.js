import { addReportToDb } from '@/app/services/addReport'
import { addReport } from '@/app/store/features/reports'
import { swrReportsToday } from '@/app/swr/reportsToday'
import { Button } from 'flowbite-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SaveBtn({index}) {
    const { mutate } = swrReportsToday()

    const report=useSelector(state=>state.reports.addReport)
    const period=useSelector(state=>state.account.period)

    const dispatch=useDispatch()
    const [loading,setLoading] =useState(false)

    const add= async ()=>{
        if(report.carId,!report.nida || !report.reportNo || !report.start||!report.streetId||!report.sourceId||!report.typeId){
            toast.error('يرجئ ادخال جميع البيانات', {
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
            return null
        }
        setLoading(true)
        await addReportToDb(
            report.carId,
            report.id,
            report.nida,
            report.reportNo,report.typeId,report.streetId,report.note,report.start,report.arrive,report.finish,report.sourceId,report.description)
        setLoading(false)
        toast.success('تم اضافة الحدث بنجاح', {
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
     
        dispatch(addReport({action:'modalDispaly',data:false}))
mutate()        
        }
  return <>

    <Button isProcessing={loading} gradientMonochrome="success" size='sm'  onClick={add}>حفظ</Button>
  </>

}

export default SaveBtn