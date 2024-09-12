'use client'
import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';

export function swrSourcesReports(){
    const period =localStorage.getItem('period')
//  const url =`https://express-rta.vercel.app/operations-reports-sources-count?period=${period}`
const url =`${apiUrl}/operations-reports-sources-count?period=${period}`
const token=localStorage.getItem('token')

  const fetcher = async () => {
   const response = await axios.get(url,{
    headers: {
      authorization: `${token}`
  },
   });

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetcher)
return {
  data,
  isLoading,
   error
}


}