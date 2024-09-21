import React from 'react'
import { swrGetCarslatsAndLngs } from '../swr/getCarslatsAndLngs'

function SelectNida(nida) {
    const { data ,isLoading ,mutate} = swrGetCarslatsAndLngs()
    const setNida=()=>{
        const newData=data.filter(car=>car.nida==nida)
        mutate(newData,false)
    }

 if(data) return (
    <div>
    {data.map(car=>{
        return <div onClick={()=>setNida(car.nida)} className='w-32 bg-green-500 text-white my-2'>{car.nida}</div>
    })}
    </div>
  )
}

export default SelectNida