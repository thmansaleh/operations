"use client"
import { createSlice } from '@reduxjs/toolkit';

const setting= createSlice({
  name: 'setting',
  initialState: {
    drawerDisplay:false,
  
    

   
},
  reducers: {
 
    setSetting: (state, action) => {
         switch (action.payload.action) {
     
        case 'drawerDisplay':
            state.drawerDisplay=action.payload.data
            break;
 

      
        default:
            break;
      }
    },

    
 

  },
});

export const { setSetting} = setting.actions;

export default setting.reducer;