
import axios from 'axios';
 const url ="https://express-rta.vercel.app/delete-user-from-cars-histpry"
  export const deleteUserFromCarsHistory= async (jobId) => {

   const response = await axios.get(url,{
     params: {
        job_id:jobId
      } });
// console.log(response.data)
   return response.data;
 };