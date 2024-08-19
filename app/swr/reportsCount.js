'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';


export  function swrReportsCount(){

//  const url ="https://express-rta.vercel.app/get-reports-count-op"
 const url =`${apiUrl}/get-reports-count-op`
  
const fetcher =async ()=>{
  const response = await axios.get(url)
  return response.data
}
 
const { data , error, isLoading ,mutate} = useSWR(url,fetcher)
return {
  data,
  isLoading,
   error,
   mutate
}


}
