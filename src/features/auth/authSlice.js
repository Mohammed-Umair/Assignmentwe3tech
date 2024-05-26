
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  email:null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;

      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.email = null
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
