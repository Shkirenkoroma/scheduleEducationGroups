import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'src/api/axios';
import { DataState, TableData } from 'src/store/types/types';

interface I {
  formaData: TableData
}

export const sendDataStudentGroups = createAsyncThunk<DataState, TableData[]>(
  'education/sendDataStudentGroups',
  async ( formaData ) => {
    try {
      const response = await $api.post('test_result',  formaData)
      return response.data
    } catch (error) {
      console.log(`Has occured something wrong like ${error}`)
    }
  },
);
