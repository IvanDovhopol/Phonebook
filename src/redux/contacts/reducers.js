import { deletedToast } from 'constans/utils';

export const fetchContactsFulfilled = (state, action) => {
  state.items = action.payload;
};

export const addContactFulfilled = (state, action) => {
  state.items.data.results.push(action.payload.data.result);
};

export const deleteContactFulfilled = (state, action) => {
  const index = state.items.data.results.findIndex(
    contact => contact._id === action.payload.data.result._id
  );

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
  state.isLoading = false;
  state.error = action.payload;
};
