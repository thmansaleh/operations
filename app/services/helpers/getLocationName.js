
import axios from 'axios';
// const apiKey = 'AIzaSyD7e4cuSEMpIyLgiLM5skxZ7S6F9DXtggE'; // Replace with your actual API key
  // const url = `https://maps.googleapis.com/maps/api/geocode/json`;
 
  export const getLocationName= async (lat,lng) => {
 const url=`https://us1.locationiq.com/v1/reverse.php?key=pk.1fcdf0b24fb57cc6083d4849a3a5cbb7&lat=${lat}&lon=${lng}&format=json&accept-language=ar
`
    // const period =localStorag.getItem('period')
   const response = await axios.get(url);
   const data= response.data;
   const name=`${data.address.road} ${data.address.suburb}`
   return name
 };