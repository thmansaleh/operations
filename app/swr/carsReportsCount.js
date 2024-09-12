'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';
import { useSelector } from 'react-redux';
export  function swrCarsReportsCount(){
    const period =useSelector(state=>state.account.account.period)

 const url =`${apiUrl}/get-cars-reports-count`

const fetcher =async ()=>{
  const response = await axios.get(url,{
    params:{
        period:period
    }
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
