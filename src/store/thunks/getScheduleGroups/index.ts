import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DataState } from 'src/store/types/types';

export const getScheduleGroups = createAsyncThunk<DataState>(
  'education/getScheduleGroups',
  async () => {
    try {
      const response = await axios.get('https://bgaa.by/test')
      return response.data
    } catch (error) {
      console.log(`Something has occured wrong ${error}`)
    }
  },
);
