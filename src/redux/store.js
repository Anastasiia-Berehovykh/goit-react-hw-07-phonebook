import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import contactsReducer from './contactsReducer';
import {  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist'

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    },
    
  })]
  

export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',  
})


export default store;