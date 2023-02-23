import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const handlePendingAuth = state => {
  console.log('register.pending');
};
const handleRejectedAuth = (state, { payload }) => {
  console.log('register.rejected');
};
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePendingAuth)
      .addCase(register.rejected, handleRejectedAuth)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.pending, handlePendingAuth)
      .addCase(logOut.rejected, handleRejectedAuth)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });

    //   [refreshUser.pending](state) {
    //     state.isRefreshing = true;
    //   },
    //   [refreshUser.fulfilled](state, action) {
    //     state.user = action.payload;
    //     state.isLoggedIn = true;
    //     state.isRefreshing = false;
    //   },
    //   [refreshUser.rejected](state) {
    //     state.isRefreshing = false;
    //   },
  },
});

export const authReducer = authSlice.reducer;
