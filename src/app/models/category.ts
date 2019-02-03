import { Question } from './question';

export class Category {
    constructor(public title: string, public questions: Question[]) { }
}
