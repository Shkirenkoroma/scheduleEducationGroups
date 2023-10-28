import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const sendDataStudentGroups = createAsyncThunk<any>(
  'education/getScheduleGroups',
  async () => {
    console.log(
      'Данная функция на стадии доработки: необходимо переделать под метод POST',
    )
    const response = await axios.post('https://bgaa.by/test_result')

    return response.data
  },
)
