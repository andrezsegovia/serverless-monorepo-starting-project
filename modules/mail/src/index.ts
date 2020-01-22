const { Core } = require('core');

export class Mail {
    constructor() {
        console.log('Mail module loaded!');
        const core = new Core();
        console.log(core.getName('Andrez'));
    }

    getName(name: string): string {
        return `Hello ${name}`;
    }
}