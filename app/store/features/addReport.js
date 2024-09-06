"use client"
import { createSlice } from '@reduxjs/toolkit';

const addReport= createSlice({
  name: 'addReport',
  initialState: {
    modalDispaly:false,
    action:null,
        id:null,
        nida:undefined,
        carId:null,
        reportNo:'',
        sourceId:'',
        typeId:'',
        start:'',
        arrive:'',
        finish:'',
        streetId:'',
        description:'',
        note:'',
        period:'',
        lat:'25.233345600491855',
        lng:'55.31997758500511',
        locationName:'',
},
  reducers: {
    add: (state, action) => {
      state.currentDrivers=action.payload;
      state.drivers=action.payload;
      switch (action.payload.action) {
        case 'nida':
            console.log(action.payload.data.nida)
            state.nida=action.payload.data.nida
            state.carId=action.payload.data.carId
            break;
        case 'reportNo':
            state.reportNo=action.payload.data
            break;
        case 'sourceId':
            state.sourceId=action.payload.data
            break;
        case 'typeId':
            state.typeId=action.payload.data
            break;
        case 'start':
            state.start=action.payload.data
            break;
        case 'arrive':
            state.arrive=action.payload.data
            break;
        case 'finish':
            state.finish=action.payload.data
            break;
        case 'streetId':
            state.streetId=action.payload.data
            break;
        case 'description':
            state.description=action.payload.data
            break;
  
        case 'note':
            state.note=action.payload.data
            break;
        case 'modalDispaly':
            state.modalDispaly=action.payload.data
            break;
        case 'action':
            state.action=action.payload.data
            break;
        case 'location':
            state.lat=action.payload.data.lat
            state.lng=action.payload.data.lng
            break;
        case 'locationName':
            state.locationName=action.payload.data
            break;
 
      
      
        default:
            break;
      }
    },
 

  },
});

export const { add} = addReport.actions;

export default addReport.reducer;