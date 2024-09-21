"use client"
import { createSlice } from '@reduxjs/toolkit';

const map= createSlice({
  name: 'map',
  initialState: {
    position: { lat: 25.272372773356242, lng: 55.41707890308244 },
  
    

   
},
  reducers: {
 
    setPosition: (state, action) => {
        state.position=action.payload
    },

    
 

  },
});

export const { setPosition} = map.actions;

export default map.reducer;