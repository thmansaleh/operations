"use client"
import { createSlice } from '@reduxjs/toolkit';

const reports= createSlice({
  name: 'reports',
  initialState: {
    phones:true,
    borders:true,
    color:false,
    addReport:{
        nida:null,
        reportNo:null,
        sourceId:null,
        typeId:null,
        start:null,
        arrive:null,
        finish:null,
        streetId:null,
        description:null,
        note:null,

    }
},
  reducers: {
    addReport: (state, action) => {
      state.currentDrivers=action.payload;
      state.drivers=action.payload;
      switch (action.payload.action) {
        case 'nida':
            state.addReport.nida=action.payload.data
            break;
        case 'reportNo':
            state.addReport.reportNo=action.payload.data
            break;
        case 'sourceId':
            state.addReport.sourceId=action.payload.data
            break;
        case 'typeId':
            state.addReport.typeId=action.payload.data
            break;
        case 'start':
            state.addReport.start=action.payload.data
            break;
        case 'arrive':
            state.addReport.arrive=action.payload.data
            break;
        case 'finish':
            state.addReport.finish=action.payload.data
            break;
        case 'streetId':
            state.addReport.streetId=action.payload.data
            break;
        case 'description':
            state.addReport.description=action.payload.data
            break;
  
        case 'note':
            state.addReport.note=action.payload.data
            break;
      
        default:
            break;
      }
    },
 

  },
});

export const { addReport} = reports.actions;

export default reports.reducer;