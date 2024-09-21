import React, { useEffect, useState } from 'react'
import { swrGetCarslatsAndLngs } from '../swr/getCarslatsAndLngs'
import { apiUrl } from '../constants'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setPosition } from '../store/features/map'

function SelectNida() {
    const dispatch =useDispatch()
    const { data ,isLoading ,mutate} = swrGetCarslatsAndLngs()
    const setNida=(car)=>{
        dispatch(setPosition({lat:car.lat,lng:car.lng}))
        const newData=cars.filter(e=>e.nida==car.nida)
        mutate([...newData],false)
    }
    const [cars,setCars]=useState(false)
useEffect(() => {
    const fetcher = async () => {
        const url =`${apiUrl}/get-cars-lats-and-lngs`
     const response = await axios.get(url);
  if(response)   setCars([...response.data])
   };
   fetcher()
  return () => null
}, [])

 if(cars.length>0) return (
    <div>
    {cars.map(car=>{
        return <div onClick={()=>setNida(car)} className='w-32 bg-green-500 text-white my-2'>{car.nida}</div>
    })}
    </div>
  )
}

export default SelectNida