"use client"
import { createSlice } from '@reduxjs/toolkit';

const reports= createSlice({
  name: 'reports',
  initialState: {
    reportId:null,
    nav:'details',
    

   
},
  reducers: {
    setReportId: (state, action) => {
      state.reportId=action.payload;
    },
    actions: (state, action) => {
         switch (action.payload.action) {
     
        case 'nav':
            state.nav=action.payload.data
            break;
   

      
        default:
            break;
      }
    },

    
 

  },
});

export const { setReportId,actions} = reports.actions;

export default reports.reducer;