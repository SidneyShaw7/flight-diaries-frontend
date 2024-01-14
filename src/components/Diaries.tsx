import { Diary } from '../types'

const Diaries = ({ diaries }: { diaries: Diary[] }) => {
  return (
    <div>
      <ul>
        <h2>Diary Entries</h2>
        {diaries.map((d) => {
          return (
            <li key={d.id}>
              <h3>{d.date}</h3>
              visibility: {d.visibility} <br />
              weather: {d.weather}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Diaries
