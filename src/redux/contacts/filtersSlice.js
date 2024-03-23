import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    query: '',
  },
  reducers: {
    filteredContacts: {
      reducer(state, action) {
        state.query = action.payload;
      },
    },
  },
});

export const { filteredContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
