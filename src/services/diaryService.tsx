import axios from 'axios'
import { Diary, NewDiary } from '../types'

const baseUrl = 'http://localhost:3000/api/diaries'

export const getAllDiaries = async () => {
  const res = await axios.get<Diary[]>(baseUrl)
  return res.data
}

export const createDiary = async (object: NewDiary) => {
  const res = await axios.post<Diary>(baseUrl, object)
  return res.data
}
