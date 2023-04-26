import { createSlice } from '@reduxjs/toolkit';

import {
  fetchApi,
  addContactThunk,
  deleteContactThunk,
} from './contact-operation';

export const initialState = {
  contacts: {
    item: [],
    loading: null,
    error: null,
  },

  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchApi.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [fetchApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.contacts.item = action.payload;
    },
    [fetchApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteContactThunk.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [deleteContactThunk.fulfilled]: (state, action) => {
      state.error = null;
      state.loading = false;
      state.contacts.item = state.contacts.item.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContactThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [addContactThunk.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [addContactThunk.fulfilled]: (state, action) => {
      state.error = null;
      state.loading = false;
      state.contacts.item.push(action.payload);
    },
    [addContactThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice;
