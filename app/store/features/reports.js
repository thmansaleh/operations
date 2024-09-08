"use client"
import { createSlice } from '@reduxjs/toolkit';

const reports= createSlice({
  name: 'reports',
  initialState: {
    reportId:null,
    reportNav:'details',
    filterNav:'current',
    

   
},
  reducers: {
    setReportId: (state, action) => {
      state.reportId=action.payload;
    },
    actions: (state, action) => {
         switch (action.payload.action) {
     
        case 'reportNav':
            state.reportNav=action.payload.data
            break;
        case 'filterNav':
            state.filterNav=action.payload.data
            break;
   

      
        default:
            break;
      }
    },

    
 

  },
});

export const { setReportId,actions} = reports.actions;

export default reports.reducer;