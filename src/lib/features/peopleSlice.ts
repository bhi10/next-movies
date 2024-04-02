import { People } from "@/app/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../api";
import { createAppSlice } from "../createAppSlice";
import { RootState } from "../store";

export interface PeopleSliceState {
  detail: People | undefined;
  status: 'loading' | 'success' | 'failed';
}

const initialState: PeopleSliceState = {
  detail: undefined,
  status: 'success'
};

export const getPeople = createAsyncThunk('people', async (id: string | number) => {
  try {
    const people = await fetchApi(`/person/${id}`, {
      append_to_response: 'combined_credits,images',
    });
    return people;
  } catch (error) {
    console.log(error);
  }
})

export const peopleSlice = createAppSlice({
  name: 'people',
  initialState,

  reducers: create => ({}),

  extraReducers(TrendingData) {
    TrendingData.addCase(getPeople.pending, state => {
      state.status = 'loading';
      state.detail = undefined;
    })
      .addCase(getPeople.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.status = 'success';
      })
      .addCase(getPeople.rejected, state => {
        state.status = 'failed';
        state.detail = undefined;
      });
  },
})

export const peopleDetail = (state: RootState) => state.people.detail;

export default peopleSlice;