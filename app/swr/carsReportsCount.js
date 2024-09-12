'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';
import { useSelector } from 'react-redux';
export  function swrCarsReportsCount(){

 const url =`${apiUrl}/get-cars-reports-count`
 const token=localStorage.getItem('token')

const fetcher =async ()=>{
  const response = await axios.get(url,{
    headers: {
      authorization: `${token}`
  },
   
  })
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
