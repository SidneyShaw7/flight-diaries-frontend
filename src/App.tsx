import { useState, useEffect } from 'react';
import { Diary } from './types';
import { getAllDiaries } from './services/diaryService';
import Diaries from './components/Diaries';
import DiaryForm from './components/DiaryForm';

function App() {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    getAllDiaries()
      .then((data) => {
        if (Array.isArray(data)) {
          setDiaries(data);
        } else {
          console.error('Received data is not an array or is undefined');
          setDiaries([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching diaries:', error);
        setDiaries([]);
      });
  }, []);

  return (
    <div>
      <DiaryForm
        diaries={diaries}
        setDiaries={setDiaries}
        notification={notification}
        setNotification={setNotification}
      />
      <Diaries diaries={diaries} />
    </div>
  );
}

export default App;
