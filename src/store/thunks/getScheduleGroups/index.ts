import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DataState } from 'src/store/types/types';

export const getScheduleGroups = createAsyncThunk<DataState>(
  'education/getScheduleGroups',
  async () => {
    const response = await axios.get('https://bgaa.by/test')

    return response.data
  },
);
