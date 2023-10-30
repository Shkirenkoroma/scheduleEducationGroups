import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DataState } from 'src/store/types/types';

export const sendDataStudentGroups = createAsyncThunk<DataState, any>(
  'education/getScheduleGroups',
  async ( {dataFormField} ) => {
    try {
      const response = await axios.post('https://bgaa.by/test_result', {
        dataFormField,
      })
      return response.data
    } catch (error) {
      console.log(`Has occured something wrong like ${error}`)
    }
  },
);
