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
      state.period=localStorage.getItem('period')
      state.login=true;
    },
    logout: (state, action) => {
      state.login=false;
      state.account=null;
      state.period=false;
      localStorage.removeItem('token')
      localStorage.removeItem('period')
    },

  },
});

export const { setAccount,logout } = account.actions;

export default account.reducer;