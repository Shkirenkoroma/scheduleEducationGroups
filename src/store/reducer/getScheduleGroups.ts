import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getScheduleGroups = createAsyncThunk<any>(
  'education/getScheduleGroups',
  async () => {
    const response = await axios.get('https://bgaa.by/test')

    return response.data
  },
);
