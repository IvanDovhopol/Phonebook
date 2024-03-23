import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import * as reducer from './reducers';

const extraActions = [fetchContacts, addContact];
const getActions = type => extraActions.map(action => action[type]);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, reducer.fetchContactsFulfilled)
      .addCase(addContact.fulfilled, reducer.addContactFulfilled)
      .addCase(deleteContact.fulfilled, reducer.deleteContactFulfilled)
      .addMatcher(isAnyOf(...getActions('pending')), reducer.anyPending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), reducer.anyFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), reducer.anyRejected),
});

export const contactsReducer = contactsSlice.reducer;
