"use client"
import { createSlice } from '@reduxjs/toolkit';

const account= createSlice({
  name: 'account',
  initialState: {
    account:null,
    login:false,
    period:false,
},
  reducers: {
    setAccount: (state, action) => {
      state.account=action.payload.account;
      state.period=action.payload.period;
      state.login=true;
    },
    logout: (state, action) => {
      state.login=false;
      state.account=null;
      state.period=false;
    },

  },
});

export const { setAccount,logout } = account.actions;

export default account.reducer;