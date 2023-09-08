import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getRepos } from '../githubApi';
import { gitRepos } from '../data/repos';

interface IProjectsState {
  projects: Array<{ id: number; name: string; html_url: string }>;
}

const initialState: IProjectsState = {
  projects: [],
};

export const getProjects = createAsyncThunk(
  'projects/getProjects',
  async (_, thunkAPI) => {
    const res = await getRepos(gitRepos.map((rep) => rep.name));

    return res;
  }
);

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
  },
});

export default projectsSlice.reducer;
