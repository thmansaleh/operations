"use client"
import { configureStore } from '@reduxjs/toolkit';
import drivers from './features/drivers';
import checkoutReducer from './features/checkout'
import  cart from "./features/cart"
import schedule from './features/schedule';
import driver from './features/driver';
import reports from './features/reports';
import account from './features/account';
const store = configureStore({
    reducer: {
        account: account,
        drivers: drivers,
        checkout: checkoutReducer,
        cart:cart,
        schedule:schedule,
        driver:driver,
        reports:reports
    },
  });
  
  export default store;