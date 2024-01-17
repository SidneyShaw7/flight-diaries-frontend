import { Weather, Visibility, NewDiary } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

// const isObject = (obj: unknown): obj is object => {
//   return obj !== null && typeof obj === 'object';
// };

// const isNumber = (value: unknown): value is number => {
//   return typeof value === 'number';
// };

const isWeather = (value: unknown): value is Weather => {
  return Object.values(Weather).includes(value as Weather);
};

const isVisibility = (value: unknown): value is Visibility => {
  return Object.values(Visibility).includes(value as Visibility);
};

const parseDate = (date: unknown): string => {
  if (!isString(date)) {
    throw new Error('Incorrect or missing date.');
  }

  return date;
};

const parseComment = (comment: unknown): string => {
  if (!isString(comment)) {
    throw new Error('Incorrect or missing comment.');
  }

  return comment;
};

const parseWeather = (weather: unknown): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error('Incorrect weather: ' + weather);
  }

  return weather;
};

const parseVisibility = (visibility: unknown): Visibility => {
  if (!isVisibility(visibility)) {
    throw new Error('Incorrect visibility: ' + visibility);
  }

  return visibility;
};

const isNewDiary = (object: unknown): NewDiary => {
  if (!object || typeof object !== 'object' || object === null) {
    throw new Error('Incorrect or missing data');
  }

  if (
    'date' in object &&
    'weather' in object &&
    'visibility' in object &&
    'comment' in object
  ) {
    const newEntry: NewDiary = {
      date: parseDate(object.date),
      weather: parseWeather(object.weather),
      visibility: parseVisibility(object.visibility),
      comment: parseComment(object.comment),
    };

    return newEntry;
  }

  throw new Error('Incorrect data: a field is missing.');
};

export default isNewDiary;
