"use client"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { setCurrentDrivers } from "../store/features/drivers";
import SingleRow from "./SingleRow";
import SearchInput from "./SearchInput";

export default function Table({drivers}){
  // const dispatch=useDispatch()
  // const currentDrivers=useSelector(state=>state.drivers.drivers)
  // useEffect(()=>{
  //   dispatch(setCurrentDrivers(drivers))
  //   return ()=>{

  //   }
  // },[drivers])

  return <>
<div className="container mx-auto px-4  custom-scroll overflow-auto h-screen sm:px-8">
  <div className="">
   
    <div className="my-2 flex justify-center items-center ">



<SearchInput/>



    </div>
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 ">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full text-center leading-normal">
          <thead>
            <tr>
            <th className="px-5  border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold  uppercase tracking-wider text-center">
                #
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider text-center">
                الأسم
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider text-center">
                رقم الهاتف
              </th>
      
            </tr>
          </thead>
          <tbody>

            {drivers.map((driver,index)=>{
                return      <SingleRow key={driver.job_id} index={index+1} driver={driver}/>

            })}

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  </>


}