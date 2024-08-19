
import axios from 'axios';
import { apiUrl } from '../constants';
const url =`${apiUrl}/verify-token`

  export const verifyToken= async () => {
const token =localStorage.getItem('token')

   const response = await axios.get(url,{
    headers: {
        'Authorization': ` ${token}`
    }

 });
console.log(response.data)
   return response.data;
 };