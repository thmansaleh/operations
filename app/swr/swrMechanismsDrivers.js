'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';


export  function swrMechanismsDrivers(){

  const period =localStorage.getItem('period')

//  const url =`https://express-rta.vercel.app/get-all-mechanisms-drivers`
const url =`${apiUrl}/get-all-mechanisms-drivers`

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
