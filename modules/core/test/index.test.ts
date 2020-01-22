import { Core } from '../src/';

describe('Core module tests', () => {
    test('Instantiate de module', () => {
        const core = new Core();
        console.log(core.getName('Andrez'));
    });
});