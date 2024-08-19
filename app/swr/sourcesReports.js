
import axios from 'axios';

import useSWR from 'swr'

export function swrSourcesReports(){
    const period =localStorage.getItem('period')
 const url =`https://express-rta.vercel.app/operations-reports-sources-count?period=${period}`
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