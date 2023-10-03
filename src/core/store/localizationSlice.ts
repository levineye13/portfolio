import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TLanguage = 'ru' | 'en';

interface IInitialState {
  localization: TLanguage;
}

const initialState: IInitialState = {
  localization: 'en',
};

export const localizationSlice = createSlice({
  name: 'localization',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<{ lang: TLanguage }>) => {
      state.localization = action.payload.lang;
    },
  },
});

export default localizationSlice.reducer;
