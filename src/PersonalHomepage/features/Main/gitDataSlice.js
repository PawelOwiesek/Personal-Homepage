import { createSlice } from "@reduxjs/toolkit";

const gitDataSlice = createSlice({
  name: "gitData",
  initialState: {
    status: "loading",
    repositories: [],
  },
  reducers: {
    fetchGitData: (state) => {
      state.status = "loading";
    },
    fetchGitDataSuccess: (state, { payload: repositories }) => {
      state.status = "success";
      state.repositories = repositories;
    },
    fetchGitDataFailure: (state) => {
      state.status = "failure";
    },
  },
});

export const { fetchGitData, fetchGitDataSuccess, fetchGitDataFailure } =
  gitDataSlice.actions;

export const selectDataState = (state) => state.gitData;
export const selectRepositoresData = (state) =>
  selectDataState(state).repositories;
export const selectDataStatus = (state) => selectDataState(state).status;
export default gitDataSlice.reducer;
