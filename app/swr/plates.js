
import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';
import { useSelector } from 'react-redux';

export function swrReportPlates(){
  const reportId=useSelector(state=>state.reports.reportId)

  const token=localStorage.getItem('token')

    const url =`${apiUrl}/report-plates`
  const fetcher = async () => {
   const response = await axios.get(url,{
    headers: {
      authorization: `${token}`
  },
  params:{
    id:reportId
  }
   });

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