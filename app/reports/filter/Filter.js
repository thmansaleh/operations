import { mutate } from 'swr'
import './styles.css'
import { swrReportsToday } from '@/app/swr/reportsToday'
import { apiUrl } from '@/app/constants'
import ExportAsExcel from './ExportAsExcel'
function Filter() {
    const { data ,isLoading } = swrReportsToday('المسائية')

    const navs=[
        {
            title:'أحداث غير منتهية ',
            nav:'last',
            icon:   <svg  className="w-5 h-5 fill-gray-500" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"></path></svg>

        },
        {
            title:'الأحداث اليومية',
            nav:'daily',
            icon:<svg className="w-5 h-5 fill-gray-500" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M48 82.7v346.7c0 19.1 15.5 34.7 34.7 34.7h346.7c19.1 0 34.7-15.5 34.7-34.7V82.7c0-19.1-15.5-34.7-34.7-34.7H82.7C63.5 48 48 63.5 48 82.7zm89.3 297.1c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zM384.7 374h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14z"></path></svg>
        },
        // {
        //     title:'تصدير الأحداث',
        //     nav:'excel',
        //     icon:<svg  className="w-5 h-5 fill-blue-900" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M2.85858 2.87732L15.4293 1.0815C15.7027 1.04245 15.9559 1.2324 15.995 1.50577C15.9983 1.52919 16 1.55282 16 1.57648V22.4235C16 22.6996 15.7761 22.9235 15.5 22.9235C15.4763 22.9235 15.4527 22.9218 15.4293 22.9184L2.85858 21.1226C2.36593 21.0522 2 20.6303 2 20.1327V3.86727C2 3.36962 2.36593 2.9477 2.85858 2.87732ZM17 2.99997H21C21.5523 2.99997 22 3.44769 22 3.99997V20C22 20.5523 21.5523 21 21 21H17V2.99997ZM10.2 12L13 7.99997H10.6L9 10.2857L7.39999 7.99997H5L7.8 12L5 16H7.39999L9 13.7143L10.6 16H13L10.2 12Z"></path></svg>      
        //   },
    ]
    const setNav=(nav)=>{
        const period =localStorage.getItem('period')

const url =`${apiUrl}/get-reports-for-today?period=${period}`
if(nav=='daily'){
    // const newData=data.filter(report=>report)
    mutate(url)
}else{
    const newData=data.filter(report=>!report.finish)
    mutate(url,newData,false)
}
    }
  return (
    <div className=" text-xs font-semibold flex gap-x-4  to-gray-800">
       {navs.map(filter=>{
        return  <div >
        <input defaultChecked={filter.nav=='last'?true:false} className='hidden reports-filter' name='reports-filter' id={filter.nav} type="radio"/>
        <label htmlFor={filter.nav}>
            <div onClick={()=>setNav(filter.nav)} className="flex items-center gap-x-2 w-fit   p-1">
                {filter.icon}
<div>{filter.title}</div>
            </div>
        </label>
    </div>
       })}
       <ExportAsExcel/>
    </div>
  )
}

export default Filter