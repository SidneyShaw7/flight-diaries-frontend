import axios from 'axios';
import { Diary, NewDiary } from '../types';

const baseUrl = 'http://localhost:3000/api/diaries';

export const getAllDiaries = async () => {
  try {
    const res = await axios.get<Diary[]>(baseUrl);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { error: error.response.data.message || 'An error occurred' };
      // console.log(error.status);
      // console.error(error.response);
    }
  }
};

export const createDiary = async (object: NewDiary) => {
  try {
    const res = await axios.post<Diary>(baseUrl, object);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { error: error.response.data.message || 'An error occurred' };
      // console.log(error.status);
      // console.error(error.response);
    }
  }
};
