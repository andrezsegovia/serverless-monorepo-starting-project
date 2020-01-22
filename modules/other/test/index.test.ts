import { Other } from '../src/';

describe('Mail module tests', () => {
    test('Instatiate the module', () => {
      const other = new Other();
      console.log(other.getName('Maria'));
    })
});