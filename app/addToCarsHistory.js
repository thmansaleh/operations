
import axios from 'axios';
 const url ="https://express-rta.vercel.app/add-car-history"
  export const addToCarsHistory= async (nida,jobId,) => {

    const period='المسائية'
   const response = await axios.get(url,{
     params: {
       nida:nida,
       job_id:jobId,
       period:period
      } });
console.log(response.data)
   return response.data;
 };