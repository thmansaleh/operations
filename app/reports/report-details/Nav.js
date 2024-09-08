import { useDispatch, useSelector } from 'react-redux'
import './styles.css'
import { actions } from '@/app/store/features/reports'
function Nav() {
    const dispatch=useDispatch()
    const currentNav=useSelector(state=>state.reports.reportNav)

    const data=[
        {
            title:'تفاصيل الحدث',
            nav:'details',
            icon:<svg className="w-4 h-4 fill-gray-800"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
        },
        {
            title:'حالة الحدث',
            nav:'status',
            icon:<svg className="w-5 h-5 fill-gray-800" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><g id="View_Timeline"><g><path d="M18.436,20.94H5.562a2.5,2.5,0,0,1-2.5-2.5V5.567a2.5,2.5,0,0,1,2.5-2.5H18.436a2.5,2.5,0,0,1,2.5,2.5V18.44A2.5,2.5,0,0,1,18.436,20.94ZM5.562,4.067a1.5,1.5,0,0,0-1.5,1.5V18.44a1.5,1.5,0,0,0,1.5,1.5H18.436a1.5,1.5,0,0,0,1.5-1.5V5.567a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M6.544,8.287h0a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z"></path><path d="M9.271,12.5h0a.5.5,0,0,1,0-1h5.454a.5.5,0,0,1,0,1Z"></path><path d="M12,16.724h0a.5.5,0,0,1,0-1h5.455a.5.5,0,0,1,0,1Z"></path></g></g></svg>
        },
        {
            title:'قائمة المركبات',
            nav:'vehicles',
            icon:<svg className="w-5 h-5 fill-gray-800" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h96v8a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM80,152H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm120,0H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM44.31,104,69.2,48H186.8l24.89,56Z"></path></svg>        },
        {
            title:'صور الحدث',
            nav:'media',
            icon:
<svg className="w-5 h-5 fill-gray-800"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="280" r="63"></circle><path d="M440 96h-88l-32-32H192l-32 32H72c-22.092 0-40 17.908-40 40v272c0 22.092 17.908 40 40 40h368c22.092 0 40-17.908 40-40V136c0-22.092-17.908-40-40-40zM256 392c-61.855 0-112-50.145-112-112s50.145-112 112-112 112 50.145 112 112-50.145 112-112 112z"></path></svg>   }
   ]
    const setNav=(nav)=>{
dispatch(actions({action:'reportNav',data:nav}))
console.log(nav)
    }
  return (
    <div className=" text-xs font-semibold flex gap-x-4  to-gray-800">
       {data.map(nav=>{
        return  <div key={nav.nav}  >
        <input checked={currentNav==nav.nav?true:null} className='hidden report-nav' name='reports-nav' id={nav.nav} type="radio"/>
        <label htmlFor={nav.nav}>
            <div onClick={()=>setNav(nav.nav)} className="flex cursor-pointer select-none items-center gap-x-2 w-fit  rournded-lg p-1">
                {nav.icon}
<div>{nav.title}</div>
            </div>
        </label>
    </div>
       })}
    </div>
  )
}

export default Nav