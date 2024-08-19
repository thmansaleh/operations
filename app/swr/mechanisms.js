'use client'

import axios from 'axios';

import useSWR from 'swr'


export  function swrMechanisms(){

  const period =localStorage.getItem('period')

 const url =`https://express-rta.vercel.app/operations-mechanisms`
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
