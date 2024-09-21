
import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';
import { useSelector } from 'react-redux';

export function swrGetCarslatsAndLngs(){


    const url =`${apiUrl}/get-cars-lats-and-lngs`
  const fetcher = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading,mutate } = useSWR(url, fetcher,{
//   refreshInterval: 2000 

})
return {
  data,
  isLoading,
   error,
   mutate
}


}