import { useState, useEffect } from 'react'
import { Diary } from './types'
import { v4 as uuidv4 } from 'uuid'
import { getAllDiaries, createDiary } from './services/diaryService'
import Diaries from './components/Diaries'

function App() {
  const [diaries, setDiaries] = useState<Diary[]>([])

  useEffect(() => {
    getAllDiaries().then((data) => {
      setDiaries(data)
    })
  })
  return <Diaries diaries={diaries} />
}

export default App
