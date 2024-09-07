import './styles.css'
function Nav() {
    const data=[
        {
            name:'تفاصيل الحدث',
            action:'details',
            icon:<svg className="w-4 h-4 fill-gray-800"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
        },
        {
            name:'حالة الحدث',
            action:'status',
            icon:<svg className="w-5 h-5 fill-gray-800" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><g id="View_Timeline"><g><path d="M18.436,20.94H5.562a2.5,2.5,0,0,1-2.5-2.5V5.567a2.5,2.5,0,0,1,2.5-2.5H18.436a2.5,2.5,0,0,1,2.5,2.5V18.44A2.5,2.5,0,0,1,18.436,20.94ZM5.562,4.067a1.5,1.5,0,0,0-1.5,1.5V18.44a1.5,1.5,0,0,0,1.5,1.5H18.436a1.5,1.5,0,0,0,1.5-1.5V5.567a1.5,1.5,0,0,0-1.5-1.5Z"></path><path d="M6.544,8.287h0a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z"></path><path d="M9.271,12.5h0a.5.5,0,0,1,0-1h5.454a.5.5,0,0,1,0,1Z"></path><path d="M12,16.724h0a.5.5,0,0,1,0-1h5.455a.5.5,0,0,1,0,1Z"></path></g></g></svg>
        },
        {
            name:'قائمة المركبات',
            action:'vehicles',
            icon:<svg className="w-5 h-5 fill-gray-800" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h96v8a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM80,152H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm120,0H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM44.31,104,69.2,48H186.8l24.89,56Z"></path></svg>        },
        {
            name:'صور الحدث',
            action:'photes',
            icon:<svg className="w-5 h-5 fill-gray-800" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"></path></svg>               },
    ]
  return (
    <div className=" text-xs font-semibold flex gap-x-4  to-gray-800">
       {data.map(nav=>{
        return  <div >
        <input className='hidden report-nav' name='reports-filter' id={nav.action} type="radio"/>
        <label htmlFor={nav.action}>
            <div className="flex items-center gap-x-2 w-fit  rournded-lg p-1">
                {nav.icon}
<div>{nav.name}</div>
            </div>
        </label>
    </div>
       })}
    </div>
  )
}

export default Nav