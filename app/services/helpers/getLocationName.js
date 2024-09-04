
import axios from 'axios';
const apiKey = 'AIzaSyD7e4cuSEMpIyLgiLM5skxZ7S6F9DXtggE'; // Replace with your actual API key
  const url = `https://maps.googleapis.com/maps/api/geocode/json`;

  export const getLocationName= async (lat,lng) => {

    // const period =localStorag.getItem('period')
   const response = await axios.get(url,{
     params: {
        latlng:`${lat},${lng}`,
        key:apiKey,
        language:'ar'

    
      } });
   return response.data;
 };