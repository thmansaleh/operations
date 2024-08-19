
import axios from 'axios';
import { apiUrl } from '../constants';
//  const url ="https://express-rta.vercel.app/delete-report"
const url =`${apiUrl}/delete-report`

  export const deleteReport= async (id) => {
   const response = await axios.get(url,{
     params: {
       id:id
      } });
// console.log(response.data)
   return response.data;
 };