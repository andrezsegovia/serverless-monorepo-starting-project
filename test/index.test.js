const { CadApiResponses } = require('../dist/CadApiResponses');

describe('Test lib', () => {
    test('Create a instance of the class', () => {
        const cadApiResponse = new CadApiResponses();
        console.log(cadApiResponse);
        console.log(cadApiResponse.getName('Andrez'));
        return undefined;
    });
});