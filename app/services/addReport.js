
import axios from 'axios';
 const url ="https://express-rta.vercel.app/add-report-operations"
  export const addReportToDb= async (nida,report_no,type_id,street_id,note_police,start,arrive,finish,source,description) => {
    // if (!nida || !report_no || !period || !type_id || !source_id || !street_id || !start || !arrive || !finish  || !note_police) {

    const period='المسائية'
   const response = await axios.get(url,{
     params: {
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