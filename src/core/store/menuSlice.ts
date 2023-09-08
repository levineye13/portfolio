import { createSlice } from '@reduxjs/toolkit';

interface IMenuState {
  active: boolean;
}

const initialState: IMenuState = {
  active: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    open: (state) => {
      state.active = true;
    },
    close: (state) => {
      state.active = false;
    },
    toggle: (state) => {
      if (state.active) {
        state.active = false;
      } else {
        state.active = true;
      }
    },
  },
});

export const { open, close, toggle } = menuSlice.actions;

export default menuSlice.reducer;
