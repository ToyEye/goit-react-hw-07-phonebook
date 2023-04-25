import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContact(state, action) {
      console.log(state.filter);
      state.filter = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;

export default filterSlice.reducer;
