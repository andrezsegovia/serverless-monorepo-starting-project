const { Core } = require('../');

describe('Core module tests', () => {
    it('Instantiate de module', () => {
        const core = new Core();
        console.log(core.getName('Andrez'));
    });
});