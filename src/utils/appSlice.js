import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
  initialState: {
    isMenuOpen: true,
  },
});
export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;
