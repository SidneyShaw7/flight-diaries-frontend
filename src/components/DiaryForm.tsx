import { Weather, Visibility, DiaryFormProps } from '../types';
import { createDiary } from '../services/diaryService';
import { useState } from 'react';

const DiaryForm = ({ setDiaries, diaries }: DiaryFormProps) => {
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState<Weather | undefined>(undefined);
  const [visibility, setVisibility] = useState<Visibility | undefined>(undefined);
  const [comment, setComment] = useState('');

  const diaryCreation = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createDiary({
      date: date,
      weather: weather,
      visibility: visibility,
      comment: comment,
    }).then((data) => {
      setDiaries(diaries.concat(data));
    });
    setDate('');
    setWeather(undefined);
    setVisibility(undefined);
    setComment('');
  };

  return (
    <div>
      <h2>Add new Diary</h2>
      <form onSubmit={diaryCreation}>
        date
        <input value={date} onChange={(e) => setDate(e.target.value)} />
        <br />
        weather
        <input
          value={weather}
          onChange={(e) => setWeather(e.target.value as Weather)}
        />
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
