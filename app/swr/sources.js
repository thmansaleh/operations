'use client'

import axios from 'axios';

import useSWR from 'swr'

export function swrSources(){
//  const url ="https://saba.cc/schedule/shifts.php"
 const url ="https://express-rta.vercel.app/get-sources"
  const fetcher = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetcher)
return {
  data,
  isLoading,
   error
}


}