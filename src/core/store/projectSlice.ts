import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getRepos } from '../githubApi';
import { gitRepos, TRep } from '../data/repos';

interface IRep {
  id: number;
  name: string;
  html_url: string;
}

interface IProjectsState {
  projects: Array<IRep>;
  packages: Array<IRep>;
  loading: boolean;
  error: string | null;
}

const initialState: IProjectsState = {
  projects: [],
  packages: [],
  loading: false,
  error: null,
};

export const getProjects = createAsyncThunk(
  'projects/getProjects',
  async (_, thunkAPI) => {
    try {
      const res = await getRepos(gitRepos.map((rep) => rep.name));

      const data = res.reduce(
        (
          acc: Pick<IProjectsState, 'projects' | 'packages'>,
          rep: IRep
        ): Pick<IProjectsState, 'projects' | 'packages'> => {
          const repos = gitRepos.find((item) => item.name === rep.name) as TRep;

          if (repos.isPackage) {
            acc.packages.push(rep);

            return {
              ...acc,
              packages: acc.packages,
            };
          }

          acc.projects.push(rep);

          return {
            ...acc,
            projects: acc.projects,
          };
        },
        {
          projects: [],
          packages: [],
        }
      );

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to fetch projects.');
    }
  }
);

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.projects = action.payload.projects;
        state.packages = action.payload.packages;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = JSON.stringify({
          code: action.error.code || '',
          message: action.error.message || new Error('Error to fetch projects'),
        });
      });
  },
});

export default projectsSlice.reducer;
