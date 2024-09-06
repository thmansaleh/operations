'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';


export  function swrRecentReports(){

 const url =`${apiUrl}/recent-reports`
  
const fetcher =async ()=>{
    const token=localStorage.getItem('token')
  const response = await axios.get(url,{
    headers: {
      authorization: `${token}`
  },
  })
  return response.data
}
 
const { data , error, isLoading ,mutate} = useSWR(url,fetcher,{
        // refreshInterval: 2000 

})
return {
  data,
  isLoading,
   error,
   mutate
}


}
