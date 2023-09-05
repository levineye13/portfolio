import { configureStore } from '@reduxjs/toolkit';

import githubProjects from './projectSlice';

export const store = configureStore({
  reducer: {
    project: githubProjects,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
