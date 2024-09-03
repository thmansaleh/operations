
import axios from 'axios';
import { apiUrl } from '../constants';
import { generateRandomReportNumber } from './helpers/generateRandomReportNumber';
//  const url ="https://express-rta.vercel.app/add-report-operations"
const url =`${apiUrl}/add-report-operations`

  export const addReportToDb= async (
    carId,
    id,
    nida,
    report_no,
    type_id,
    street_id,
    note_police,
    source,
    description,
    lat,
    lng,
  ) => {

    const period =localStorage.getItem('period')
   const response = await axios.get(url,{
     params: {
      car_id:carId,
       id:id,
       nida:nida,
       period:period,
       report_no:36782922,
       type_id:type_id,
       source_id:source,
       street_id:street_id,
       note_police:note_police,
       description:description,
       lat:lat,
       lng:lng,
       
      } });
console.log(response.data)
   return response.data;
 };