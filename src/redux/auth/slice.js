import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';
import * as reducer from './reducers';

const extraActions = [register, login];
const getActions = type => extraActions.map(action => action[type]);

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, reducer.registerFulfilled)
      .addCase(login.fulfilled, reducer.loginFulfilled)
      .addCase(logout.fulfilled, reducer.logOutFulfilled)
      .addCase(refreshUser.pending, reducer.refreshUserPending)
      .addCase(refreshUser.fulfilled, reducer.refreshUserFulfilled)
      .addCase(refreshUser.rejected, reducer.refreshUserRejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), reducer.anyFulfilled)
      .addMatcher(isAnyOf(...getActions('pending')), reducer.anyPending)
      .addMatcher(isAnyOf(...getActions('rejected')), reducer.anyRejected),
});

export const authReducer = authSlice.reducer;
