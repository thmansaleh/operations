'use client'

import axios from 'axios';
import useSWR from 'swr'
import { apiUrl } from '../constants';
export  function swrDrivers(){

//  const url ="https://express-rta.vercel.app/get-all-drivers"
const url =`${apiUrl}/get-all-drivers`

  
const fetcher =async ()=>{
  const response = await axios.get(url)
  return response.data
}

const { data , error, isLoading,mutate } = useSWR(url,fetcher)
return {
  data,
  isLoading,
   error,
   mutate
}
}
