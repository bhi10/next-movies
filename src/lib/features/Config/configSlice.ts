import { fetchApi } from '@lib/api';
import { createAppSlice } from '@lib/createAppSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ConfigDetail, Country, Job, Language, Timezone } from '@utils/types/configuration';

export interface ConfigSliceState {
  configuration?: ConfigDetail;
  countries?: Country[];
  jobs?: Job[];
  languages?: Language[];
  primary_translations?: string[];
  timezones?: Timezone[];
  status: 'loading' | 'success' | 'failed';
}

const initialState: ConfigSliceState = {
  configuration: undefined,
  countries: undefined,
  jobs: undefined,
  languages: undefined,
  primary_translations: undefined,
  timezones: undefined,
  status: 'success',
};

export const getConfigDetail = createAsyncThunk('config', async () => {
  try {
    const config = await fetchApi(`/configuration`);
    const countries = await fetchApi(`/configuration/countries`);
    const jobs = await fetchApi(`/configuration/jobs`);
    const languages = await fetchApi('/configuration/languages');
    const primary_translations = await fetchApi('/configuration/primary_translations');
    const timezones = await fetchApi('/configuration/timezones');

    return { config, countries, jobs, languages, primary_translations, timezones };
  } catch (error) {
    console.log(error);
  }
});

export const configSlice = createAppSlice({
  name: 'config',
  initialState,

  reducers: create => ({}),

  extraReducers(ConfigDetail) {
    ConfigDetail.addCase(getConfigDetail.pending, state => {
      state.status = 'loading';
      state.configuration = undefined;
    })
      .addCase(getConfigDetail.fulfilled, (state, action) => {
        state.configuration = action.payload?.config;
        state.countries = action.payload?.countries;
        state.jobs = action.payload?.jobs;
        state.languages = action.payload?.languages;
        state.primary_translations = action.payload?.primary_translations;
        state.timezones = action.payload?.timezones;

        state.status = 'success';
      })
      .addCase(getConfigDetail.rejected, state => {
        state.status = 'failed';
        state.configuration = undefined;
      });
  },
});

export default configSlice;
