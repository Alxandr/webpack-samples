import { map } from 'lodash';

const myFn = vs => {
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
