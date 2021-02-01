import validation from './validation';
import promise from './promise';
import TimeConverter, { Format } from './timeconvert';

export default {
  ...validation,
  ...promise,
  timeconvert: {
    TimeConverter,
    Format,
  },
};
