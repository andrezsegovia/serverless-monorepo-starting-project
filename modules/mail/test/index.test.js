const { Mail } = require('../');

describe('Mail module tests', () => {
    it('Instatiate the module', () => {
        const mail = new Mail();
        console.log(mail.getName('Maria'));
    })
});