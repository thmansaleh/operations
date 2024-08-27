
import axios from 'axios';
import { apiUrl } from '../constants';
//  const url ="https://express-rta.vercel.app/add-report-operations"
const url =`${apiUrl}/add-report-operations`

  export const addReportToDb= async (carId,id,nida,report_no,type_id,street_id,note_police,start,arrive,finish,source,description) => {
    // if (!nida || !report_no || !period || !type_id || !source_id || !street_id || !start || !arrive || !finish  || !note_police) {

    const period =localStorage.getItem('period')
   const response = await axios.get(url,{
     params: {
      car_id:carId,
       id:id,
       nida:nida,
       period:period,
       report_no:report_no,
       type_id:type_id,
       source_id:source,
       street_id:street_id,
       start:start,
       arrive:arrive,
       finish:finish,
       note_police:note_police,
       description:description,
       
      } });
console.log(response.data)
   return response.data;
 };