import classes from './main.css';
import { map } from 'lodash';

const myFn = (vs: Array<string | number>) => {
  console.log(`foo class: ${classes.foo}`);

  return map(vs, v => {
    switch (typeof v) {
      case 'string':
        return `String: ${v}`;
      case 'number':
        return `Number: ${v}`;
      default:
        return `Invalid type: ${typeof v}`;
    }
  });
};

export default myFn;
