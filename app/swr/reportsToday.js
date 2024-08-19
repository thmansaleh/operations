'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';

export function swrReportsToday(){
  const period =localStorage.getItem('period')

//  const url =`https://express-rta.vercel.app/get-reports-for-today?period=${period}`
const url =`${apiUrl}/get-reports-for-today?period=${period}`

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