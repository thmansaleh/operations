
"use client";

import { Table } from "flowbite-react";
import SingleCarRow from "./SingleCarRow";

export default function CarsTable({cars}) {
  return (
    <div className="overflow-x-auto   ">
      <Table >
        <Table.Head className="text-center  font-bold text-xs">
          <Table.HeadCell className=" rounded-none bg-gray-200">المركبة</Table.HeadCell>
          <Table.HeadCell className=" rounded-none bg-gray-200">السائق</Table.HeadCell>
          <Table.HeadCell className="rounded-none bg-gray-200">رقم الهاتف</Table.HeadCell>
          <Table.HeadCell className="rounded-none bg-gray-200">وقت استلام الدورية</Table.HeadCell>
       
        </Table.Head>
        <Table.Body className="divide-y">
  
          {cars.map(car=>{
            return <SingleCarRow key={car.car_id} car={car}/>
          })}
          
        </Table.Body>
      </Table>
    </div>
  );
}
