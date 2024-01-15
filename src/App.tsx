import { useState, useEffect } from 'react';
import { Diary } from './types';
import { getAllDiaries } from './services/diaryService';
import Diaries from './components/Diaries';
import DiaryForm from './components/DiaryForm';

function App() {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    getAllDiaries().then((data) => {
      setDiaries(data);
    });
  });
  return (
    <div>
      <DiaryForm diaries={diaries} setDiaries={setDiaries} />
      <Diaries diaries={diaries} />
    </div>
  );
}

export default App;
