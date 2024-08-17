
import axios from 'axios';
 const url ="https://express-rta.vercel.app/operations-login"
  export const login= async (username,password) => {

    const period='المسائية'
   const response = await axios.get(url,{
     params: {
       username:username,
       password:password,

       
      } });
console.log(response.data)
   return response.data;
 };