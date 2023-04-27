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
  extraReducers: builder => {
    builder.addCase(fetchApi.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.loading = false;
      state.contacts.item = action.payload;
    });
    builder.addCase(fetchApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(deleteContactThunk.pending, state => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(deleteContactThunk.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.contacts.item = state.contacts.item.filter(
        contact => contact.id !== action.payload.id
      );
    });

    builder.addCase(deleteContactThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(addContactThunk.pending, state => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(addContactThunk.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.contacts.item.push(action.payload);
    });

    builder.addCase(addContactThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice;
