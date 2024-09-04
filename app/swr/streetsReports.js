
'use client'
import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';

export function swrStreestReorts(){
    const period =localStorage.getItem('period')
//  const url =`https://express-rta.vercel.app/streets-reports-op?period=${period}`
const url =`${apiUrl}/streets-reports-op?period=${period}`

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