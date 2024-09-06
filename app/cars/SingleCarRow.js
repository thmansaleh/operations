import { Table } from "flowbite-react";
import React from 'react'
import Drivers from "./Drivers";
import Phones from "./Phones";
import CarIcon from "./CarIcon";

function SingleCarRow({car,key}) {
  return (
    <Table.Row key={key} className="bg-white p-0 text-center text-xs font-semibold  text-black">
    <Table.Cell className=" text-center  items-center flex justify-center font-medium text-gray-900 ">
     <CarIcon car={car}/>
    </Table.Cell>
    <Table.Cell >
      <Drivers car={car}/>
    </Table.Cell>
    <Table.Cell >
        <Phones car={car}/>
    </Table.Cell>
    <Table.Cell className=" flex justify-center items-center">
        <div >{
            car.is_match? <div className="bg-yellow-500 rounded-lg text-white font-semibold p-2 w-fit">{new  Date(car.date).toLocaleTimeString()}</div>:null

        }</div>
    </Table.Cell>
   
  </Table.Row>  )
}

export default SingleCarRow