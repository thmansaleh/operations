'use client'

import axios from 'axios';

import useSWR from 'swr'


export  function swrStreets(){

 const url ="https://express-rta.vercel.app/get-streets"
//  const url ="https://saba.cc/schedule/cars.php"
  
const fetcher =async ()=>{
  const response = await axios.get(url)
  return response.data
}
 
const { data , error, isLoading } = useSWR(url,fetcher)
return {
  data,
  isLoading,
   error,
}


}
