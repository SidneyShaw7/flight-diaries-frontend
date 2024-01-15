export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy',
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}

export interface Diary {
  id: number;
  date: string;
  weather: Weather | undefined;
  visibility: Visibility | undefined;
  comment: string;
}

export interface DiaryFormProps {
  setDiaries: React.Dispatch<React.SetStateAction<Diary[]>>;
  diaries: Diary[];
}

export type NewDiary = Omit<Diary, 'id'>;

export type NonSensitiveDiaryEntry = Omit<Diary, 'comment'>;
