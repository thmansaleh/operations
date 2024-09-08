
import axios from 'axios';
import { apiUrl } from '../constants';
const url =`${apiUrl}/change-report-status`

export const changeReportStatus= async ( id,action ) => {
    // const token=localStorage.getItem('token')

   const response = await axios.get(url,{

//     headers: {
//       authorization: `${token}`
//   },
     params: { 
        id:id,
         action:action, 
    } });
   return response.data;
 };