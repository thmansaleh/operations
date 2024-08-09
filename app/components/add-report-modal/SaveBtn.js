import { addReportToDb } from '@/app/services/addReport'
import { addReport } from '@/app/store/features/reports'
import { Button } from 'flowbite-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SaveBtn() {
    const data=useSelector(state=>state.reports.addReport)
    const dispatch=useDispatch()
    const [loading,setLoading] =useState(false)
    
    const add= async ()=>{
        setLoading(true)
        console.log(data)
        await addReportToDb(data.nida,data.reportNo,data.typeId,data.streetId,data.note,data.start,data.arrive,data.finish,data.sourceId,data.description)
        setLoading(false)
        dispatch(addReport({action:'modalDispaly',data:false}))
        
        }
  return (
    <Button isProcessing={loading} gradientMonochrome="success" size='sm'  onClick={add}>حفظ</Button>
)
}

export default SaveBtn