import { createReducer } from "@reduxjs/toolkit";
import {combineReducers} from 'redux';
import { fetchContact, removeContact, addContact } from "./contactsOperation";
import {filterContaсts} from './contactsActions';

const items = createReducer([], {
    [fetchContact.fulfilled]: (_, action) => action.payload,
    [addContact.fulfilled]: (state, action) => {
        return [...state, action.payload]
    },

[removeContact.fulfilled]: (state, action) => {
   return state.filter(({id}) => id !== action.payload)
}


})

const filter = createReducer('', {
    [filterContaсts]: (_, action) => {
        return action.payload;
   }
})



export default combineReducers({
    items,
    filter,
    
})