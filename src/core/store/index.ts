import { configureStore } from '@reduxjs/toolkit';

import githubProjects from './projectSlice';
import menu from './menuSlice';

export const store = configureStore({
  reducer: {
    project: githubProjects,
    menu,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
