import { Weather, Visibility, DiaryFormProps, NotificationFormProps } from '../types';
import { createDiary } from '../services/diaryService';
import { useState } from 'react';
import Notification from './Notification';
import isNewDiary from '../utils';

const DiaryForm = (
  { setDiaries }: DiaryFormProps,
  { setNotification }: NotificationFormProps
) => {
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState<Weather | undefined>(undefined);
  const [visibility, setVisibility] = useState<Visibility | undefined>(undefined);
  const [comment, setComment] = useState('');

  const diaryCreation = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const newDiary = await createDiary({
        date: date,
        weather: weather,
        visibility: visibility,
        comment: comment,
      });
      if (isNewDiary(newDiary)) {
        setDiaries((prev) => [...prev, newDiary]);
        setDate('');
        setWeather(undefined);
        setVisibility(undefined);
        setComment('');
      }
    } catch (error) {
      if (error instanceof Error) {
        setNotification(error.message);
      }
    }
  };

  return (
    <div>
      <h2>Add new Diary</h2>
      <Notification />
      <form onSubmit={diaryCreation}>
        date
        <input value={date} onChange={(e) => setDate(e.target.value)} />
        <br />
        weather
        <input value={weather} onChange={(e) => setWeather(e.target.value as Weather)} />
        <br />
        visibility
        <input
          value={visibility}
          onChange={(e) => setVisibility(e.target.value as Visibility)}
        />
        <br />
        comment
        <input value={comment} onChange={(e) => setComment(e.target.value)} />
        <br />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default DiaryForm;
