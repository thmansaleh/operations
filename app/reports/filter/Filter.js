import './styles.css'
function Filter() {
    const data=[
        {
            name:'الأحداث الأخيرة',
            action:'last',
            icon:<svg className="w-5 h-5 fill-gray-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"></path></svg>

        },
        {
            name:'الأحداث اليومية',
            action:'daily',
            icon:<svg className="w-5 h-5 fill-gray-800" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><g id="View_Timeline"><g><path d="M18.436,20.94H5.562a2.5,2.5,0,0,1-2.5-2.5V5.567a2.5,2.5,0,0,1,2.5-2.5H18.436a2.5,2.5,0,0,1,2.5,2.5V18.44A2.5,2.5,0,0,1,18.436,20.94ZM5.562,4.067a1.5,1.5,0,0,0-1.5,1.5V18.44a1.5,1.5,0,0,0,1.5,1.5H18.436a1.5,1.5,0,0,0,1.5-1.5V5.567a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M6.544,8.287h0a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z"></path><path d="M9.271,12.5h0a.5.5,0,0,1,0-1h5.454a.5.5,0,0,1,0,1Z"></path><path d="M12,16.724h0a.5.5,0,0,1,0-1h5.455a.5.5,0,0,1,0,1Z"></path></g></g></svg>
        },
        {
            name:'تصدير الأحداث',
            action:'excel',
            icon:<svg  className="w-5 h-5 fill-gray-800" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M2.85858 2.87732L15.4293 1.0815C15.7027 1.04245 15.9559 1.2324 15.995 1.50577C15.9983 1.52919 16 1.55282 16 1.57648V22.4235C16 22.6996 15.7761 22.9235 15.5 22.9235C15.4763 22.9235 15.4527 22.9218 15.4293 22.9184L2.85858 21.1226C2.36593 21.0522 2 20.6303 2 20.1327V3.86727C2 3.36962 2.36593 2.9477 2.85858 2.87732ZM17 2.99997H21C21.5523 2.99997 22 3.44769 22 3.99997V20C22 20.5523 21.5523 21 21 21H17V2.99997ZM10.2 12L13 7.99997H10.6L9 10.2857L7.39999 7.99997H5L7.8 12L5 16H7.39999L9 13.7143L10.6 16H13L10.2 12Z"></path></svg>        },
    ]
  return (
    <div className=" text-xs font-semibold flex gap-x-4  to-gray-800">
       {data.map(filter=>{
        return  <div >
        <input className='hidden reports-filter' name='reports-filter' id={filter.action} type="radio"/>
        <label htmlFor={filter.action}>
            <div className="flex items-center gap-x-2 w-fit bg-gray-200 rounded-lg p-1">
                {filter.icon}
<div>{filter.name}</div>
            </div>
        </label>
    </div>
       })}
    </div>
  )
}

export default Filter