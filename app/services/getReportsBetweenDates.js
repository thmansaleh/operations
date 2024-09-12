
'use client'

import axios from 'axios';
import { apiUrl } from '../constants';
export const getReportBetweenDates= async (startDate,endDate) => {
    const url =`${apiUrl}/get-reports-between-dates`
    //  const url ='https://saba.cc/schedule/getDriverCars.php'
    let end = new Date(endDate); 
end.setDate(end.getDate() + 1);
    let start = new Date(startDate); 
startDate.setDate(start.getDate() + 1);

   const response = await axios.get(url,{
     params: {
       start_date:start,
       end_date:end

      } });

   return response.data;
 };