'use client'

import axios from 'axios';

import useSWR from 'swr'


export  function swrStreetsReportsCount(){

 const url ="https://express-rta.vercel.app/get-streets-reports?period=المسائية"
  
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
