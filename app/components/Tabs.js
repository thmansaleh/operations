
import Link from "next/link";
import './styles.css'
export default function Tabs() {
    const data =[
        {
            tab:'الرئيسية',
            route:'/',
            icon:<svg className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C12.5523 3 13 3.44771 13 4L13 10C13 10.5523 12.5523 11 12 11L4 11C3.44772 11 3 10.5523 3 10L3 4C3 3.44772 3.44772 3 4 3L12 3ZM20 3C20.5523 3 21 3.44771 21 4L21 10C21 10.5523 20.5523 11 20 11L16 11C15.4477 11 15 10.5523 15 10L15 4C15 3.44771 15.4477 3 16 3L20 3ZM20 13C20.5523 13 21 13.4477 21 14L21 20C21 20.5523 20.5523 21 20 21L12 21C11.4477 21 11 20.5523 11 20L11 14C11 13.4477 11.4477 13 12 13L20 13ZM3 14C3 13.4477 3.44772 13 4 13L8 13C8.55229 13 9 13.4477 9 14L9 20C9 20.5523 8.55229 21 8 21L4 21C3.44772 21 3 20.5523 3 20L3 14Z"></path></svg>
        },
      
        {
            tab:'الدوريات',
            route:'cars',
            icon:<svg 
            className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M96,24a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,24Zm152,88a8,8,0,0,1-8,8h-8v80a16,16,0,0,1-16,16H192a16,16,0,0,1-16-16v-8H80v8a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V120H16a8,8,0,0,1,0-16H27.36L54.75,56.06A16,16,0,0,1,68.64,48H187.36a16,16,0,0,1,13.89,8.06L228.64,104H240A8,8,0,0,1,248,112ZM88,144a8,8,0,0,0-8-8H56a8,8,0,0,0,0,16H80A8,8,0,0,0,88,144Zm120,0a8,8,0,0,0-8-8H176a8,8,0,0,0,0,16h24A8,8,0,0,0,208,144Zm2.21-40L187.36,64H68.64L45.79,104Z"></path></svg>
        },
        {
            tab:'الاحداث',
            route:'reports',
            icon:<svg className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor"></path><path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor"></path><path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z" fill="currentColor"></path><path d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z" fill="currentColor"></path></svg>
        },
        {
            tab:'خبراء السير',
            route:'drivers',
            icon:<svg className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor"></path><path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor"></path><path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z" fill="currentColor"></path><path d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z" fill="currentColor"></path></svg>
        },
        {
            tab:'تسجيل خروج',
            route:'/1',
            icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20"  data-testid="flowbite-sidebar-item-icon" className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        },
    ]
    return <div className="p-3 flex flex-col gap-y-4 bg-gray-900 w-48  min-h-screen ">

{  data.map(tab=>{
        return  <div key={tab.route}>
        {/* {tab.icon}
        <div className="text-sm font-semibold text-white">{tab.tab}</div> */}
<input className="hidden tabs" type="radio" id={tab.route} name="tabs"/>  
<label htmlFor={tab.route} >
<Link className="flex items-center gap-x-2"  href={tab.route}>
{tab.icon}
<div className="text-sm font-semibold text-white">{tab.tab}</div>
</Link>
</label>
</div>  
  })}
   
  </div>
}

