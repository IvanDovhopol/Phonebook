import { deletedToast } from 'constans/utils';

export const fetchContactsFulfilled = (state, action) => {
  console.log('state in fetch', state);
  state.items = action.payload;
};

export const addContactFulfilled = (state, action) => {
  console.log('action.payload addContactFulfilled', action.payload.data);

  state.items.data.results.push(action.payload.data.result);
};

export const deleteContactFulfilled = (state, action) => {
  console.log('action.payload in deleteContactFulfilled', action.payload);
  const index = state.items.data.results.findIndex(
    contact => contact._id === action.payload.data.result._id
  );

  console.log('index in deleteContactFulfilled', index);
  state.items.data.results.splice(index, 1);
  deletedToast();
};

export const anyPending = state => {
  state.isLoading = true;
};

export const anyFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const anyRejected = (state, action) => {
  console.log('action.payload anyRejected', action.payload);
  state.isLoading = false;
  state.error = action.payload;
};
