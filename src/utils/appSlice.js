import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
  initialState: {
    isMenuOpen: true,
  },
});
export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;
