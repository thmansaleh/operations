import { addReportToDb } from '@/app/services/addReport'
import { addReport } from '@/app/store/features/reports'
import { swrReportsToday } from '@/app/swr/reportsToday'
import { Button } from 'flowbite-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SaveBtn({index}) {
    const { data,mutate } = swrReportsToday()

    const report=useSelector(state=>state.reports.addReport)
    const dispatch=useDispatch()
    const [loading,setLoading] =useState(false)

    const add= async ()=>{
        setLoading(true)
        await addReportToDb(report.id,report.nida,report.reportNo,report.typeId,report.streetId,report.note,report.start,report.arrive,report.finish,report.sourceId,report.description)
        setLoading(false)
        dispatch(addReport({action:'modalDispaly',data:false}))
mutate()        
        }
  return (
    <Button isProcessing={loading} gradientMonochrome="success" size='sm'  onClick={add}>حفظ</Button>
)
}

export default SaveBtn