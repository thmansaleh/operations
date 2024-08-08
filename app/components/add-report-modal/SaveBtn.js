import { addReport } from '@/app/services/addReport'
import { Button } from 'flowbite-react'
import { useSelector } from 'react-redux'

function SaveBtn() {
    const data=useSelector(state=>state.reports.addReport)
    const add= async ()=>{
        console.log(data)
    
         await addReport(data.nida,data.reportNo,data.typeId,data.streetId,data.note,data.start,data.arrive,data.finish,data.sourceId,data.description)
        }
  return (
    <Button gradientMonochrome="success" onClick={add}>حفظ</Button>
)
}

export default SaveBtn