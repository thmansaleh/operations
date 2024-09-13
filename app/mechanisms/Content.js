"use client"

import { swrMechanismsDrivers } from "../swr/swrMechanismsDrivers"
import Table from "./Table"

export default  function Content(){

const {data,error,isLoading} = swrMechanismsDrivers()

if(isLoading) return <h1 className="text-center mt-8">جاري التحميل...</h1>
if(error) return <h1>error</h1>

if(data) return <>
<Table drivers={data} />
</>

}