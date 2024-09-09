'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';
import { useSelector } from 'react-redux'

export  function swrReportImages(){
    const reportId=useSelector(state=>state.reports.reportId)
 const url =`${apiUrl}/get-report-images`

const fetcher =async ()=>{
    const token=localStorage.getItem('token')
  const response = await axios.get(url,{
   params:{
    report_id:reportId
  }
  })
  return response.data
}

const { data , error, isLoading ,mutate} = useSWR(url,fetcher,{
        refreshInterval: 2000 
  
})
return {
  data,
  isLoading,
   error,
   mutate
}


}