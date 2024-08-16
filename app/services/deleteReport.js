
import axios from 'axios';
 const url ="https://express-rta.vercel.app/delete-report"
  export const deleteReport= async (id) => {
   const response = await axios.get(url,{
     params: {
       id:id
      } });
// console.log(response.data)
   return response.data;
 };