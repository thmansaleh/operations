'use client'

import axios from 'axios';

import useSWR from 'swr'

export function swrReportsToday(){
//  const url ="https://saba.cc/schedule/shifts.php"
 const url ="https://express-rta.vercel.app/get-reports-for-today?period=المسائية"
  const fetcher = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading,mutate } = useSWR(url, fetcher)
return {
  data,
  isLoading,
   error,
   mutate
}


}