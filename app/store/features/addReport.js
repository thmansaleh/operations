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
        reportNo:'8765432',
        sourceId:'',
        typeId:'',
        start:'',
        arrive:'',
        finish:'',
        streetId:'',
        description:'',
        note:'',
        period:'',
        lat:'',
        lng:'',
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
            state.addReport.note=action.payload.data
            break;
        case 'modalDispaly':
            state.modalDispaly=action.payload.data
            break;
        case 'action':
            state.action=action.payload.data
            break;
        case 'location':
            function parseCoordinates(coordinateString) {
                const [latitude, longitude] = coordinateString.split(',').map(Number);
                state.lat=latitude
                state.lng=longitude

        
            }
            
            const coords = parseCoordinates(action.payload.data);
            
            // console.log(action.payload.data)
            
            break;
 
      
      
        default:
            break;
      }
    },
 

  },
});

export const { add} = addReport.actions;

export default addReport.reducer;