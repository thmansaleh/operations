'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';

export function swrSources(){
//  const url ="https://express-rta.vercel.app/get-sources"
 const url =`${apiUrl}/get-sources`
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