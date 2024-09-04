'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';
import { useSelector } from 'react-redux';

export function swrReport(){
    const reportId=useSelector(state=>state.reports.reportId)
//   const period =localStorage.getItem('period')

const url =`${apiUrl}/get-report?id=${reportId}`

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