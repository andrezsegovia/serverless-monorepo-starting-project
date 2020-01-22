export class Core {
    constructor() {
        console.log('Core module loaded!');
    }

    getName(name: string): string {
        return `Hello ${name}`;
    }
}