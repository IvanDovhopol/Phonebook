import { successLoginToast, successRegisterToast } from 'constans/utils';

export const registerFulfilled = (_, action) => {
  const user = action.payload.data.user;
  console.log('action.payload.data.user in register', user);
  successRegisterToast(user.name, user.email);
};

export const loginFulfilled = (_, action) => {
  const user = action.payload.data.user;
  console.log('action.payload in login success', action.payload);
  console.log('user', user);
  successLoginToast(user.name, user.email);
};

export const logOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const refreshUserPending = state => {
  state.isRefreshing = true;
};

export const refreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const refreshUserRejected = state => {
  state.isRefreshing = false;
};

export const anyPending = state => {
  state.isLoading = true;
  state.error = false;
};

export const anyFulfilled = (state, action) => {
  state.user = action.payload.data.user;
  console.log('state in any2', state.user);
  state.token = action.payload.data.token;
  console.log('state in any3', state.token);
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

export const anyRejected = state => {
  state.isLoading = false;
  state.error = true;
};
