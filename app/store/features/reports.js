"use client"
import { createSlice } from '@reduxjs/toolkit';

const reports= createSlice({
  name: 'reports',
  initialState: {
    reportId:null,
   
},
  reducers: {
    setReportId: (state, action) => {
      state.reportId=action.payload;
    //   switch (action.payload.action) {
     
    //     case 'reportId':
    //         state.reportId=action.payload.data
    //         break;

      
    //     default:
    //         break;
    //   }
    },
 

  },
});

export const { setReportId} = reports.actions;

export default reports.reducer;