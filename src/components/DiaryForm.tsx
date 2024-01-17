import { Weather, Visibility, DiaryFormProps, NotificationFormProps } from '../types';
import { createDiary } from '../services/diaryService';
import { useState } from 'react';
import Notification from './Notification';

const DiaryForm = ({
  setDiaries,
  setNotification,
  notification,
}: DiaryFormProps & NotificationFormProps) => {
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState<Weather>(Weather.Sunny);
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Great);
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

      if (typeof newDiary === 'undefined') {
        setNotification('Error: newDiary is undefined');
      } else if ('error' in newDiary) {
        setNotification(newDiary.error);
        console.log('Setting notification:', newDiary.error);
      } else {
        setDiaries((prev) => [...prev, newDiary]);
        setDate('');
        setWeather(Weather.Sunny);
        setVisibility(Visibility.Great);
        setComment('');
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        console.log('Setting notification:', error.message);
        setNotification(error.message);
      }
    }
  };

  return (
    <div>
      <h2>Add new Diary</h2>
      <Notification notification={notification} setNotification={setNotification} />
      <fieldset>
        <legend>Adding new Diary:</legend>
        <form onSubmit={diaryCreation}>
          <div>
            <label>date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <label htmlFor="weather">weather: </label>
            <label htmlFor="cloudy">cloudy</label>
            <input
              id="cloudy"
              type="radio"
              name="weather"
              value={Weather.Cloudy}
              onChange={(e) => setWeather(e.target.value as Weather)}
            />
            <label htmlFor="rainy">rainy</label>
            <input
              id="rainy"
              type="radio"
              name="weather"
              value={Weather.Rainy}
              onChange={(e) => setWeather(e.target.value as Weather)}
            />
            <label htmlFor="stormy">stormy</label>
            <input
              id="stormy"
              type="radio"
              name="weather"
              value={Weather.Stormy}
              onChange={(e) => setWeather(e.target.value as Weather)}
            />
            <label htmlFor="sunny">sunny</label>
            <input
              id="sunny"
              type="radio"
              name="weather"
              value={Weather.Sunny}
              onChange={(e) => setWeather(e.target.value as Weather)}
            />
            <label htmlFor="windy">windy</label>
            <input
              id="windy"
              type="radio"
              name="weather"
              value={Weather.Windy}
              onChange={(e) => setWeather(e.target.value as Weather)}
            />
          </div>
          <div>
            <label htmlFor="visibility">visibility: </label>
            <label htmlFor="good">good</label>
            <input
              id="good"
              type="radio"
              name="visibility"
              value={Visibility.Good}
              onChange={(e) => setVisibility(e.target.value as Visibility)}
            />
            <label htmlFor="great">great</label>
            <input
              id="great"
              type="radio"
              name="visibility"
              value={Visibility.Great}
              onChange={(e) => setVisibility(e.target.value as Visibility)}
            />
            <label htmlFor="ok">ok</label>
            <input
              id="ok"
              type="radio"
              name="visibility"
              value={Visibility.Ok}
              onChange={(e) => setVisibility(e.target.value as Visibility)}
            />
            <label htmlFor="poor">poor</label>
            <input
              id="poor"
              type="radio"
              name="visibility"
              value={Visibility.Poor}
              onChange={(e) => setVisibility(e.target.value as Visibility)}
            />
          </div>
          <div>
            comment:
            <input value={comment} onChange={(e) => setComment(e.target.value)} />
          </div>
          <button type="submit">add</button>
        </form>
      </fieldset>
    </div>
  );
};

export default DiaryForm;
