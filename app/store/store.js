"use client"
import { configureStore } from '@reduxjs/toolkit';
import drivers from './features/drivers';
import driver from './features/driver';
import account from './features/account';
import addReport  from './features/addReport';
import reports from './features/reports';
import setting from './features/setting';
const store = configureStore({
    reducer: {
        account: account,
        drivers: drivers,
          driver:driver,
        reports:reports,
        addReport:addReport,
        setting:setting,
    },
  });
  
  export default store;