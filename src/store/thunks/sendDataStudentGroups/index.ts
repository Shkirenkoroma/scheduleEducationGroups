import { createAsyncThunk } from '@reduxjs/toolkit';
import { DataState } from 'src/store/types/types';
import axios from 'axios';

export const sendDataStudentGroups = createAsyncThunk<DataState, any>(
  'education/sendDataStudentGroups',
  async (dataFormField) => {
    try {
      const response = await axios.post(
        'https://bgaa.by/test_result',
        dataFormField,
      )
      return response.data
    } catch (error) {
      console.log(`Something has occured wrong ${error}`)
    }
  },
);
