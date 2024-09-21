import React, { useEffect, useState } from 'react'
import { swrGetCarslatsAndLngs } from '../swr/getCarslatsAndLngs'
import { apiUrl } from '../constants'
import axios from 'axios'

function SelectNida(nida) {
    const { data ,isLoading ,mutate} = swrGetCarslatsAndLngs()
    const setNida=(nida)=>{
        const newData=cars.filter(car=>car.nida==nida)
        // console.log(newData)
        mutate([...newData],false)
    }
    const [cars,setCars]=useState(false)
useEffect(() => {
    const fetcher = async () => {
        const url =`${apiUrl}/get-cars-lats-and-lngs`
     const response = await axios.get(url);
  if(response)   setCars([...response.data])
    //  return response.data;
console.log('cars is ',response.data)
   };
   fetcher()
  return () => null
}, [])

 if(cars.length>0) return (
    <div>
    {cars.map(car=>{
        return <div onClick={()=>setNida(car.nida)} className='w-32 bg-green-500 text-white my-2'>{car.nida}</div>
    })}
    </div>
  )
}

export default SelectNida