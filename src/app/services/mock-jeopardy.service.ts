import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Question } from '../models/question';
import { JeopardyService } from './jeopardy.service';

@Injectable({
  providedIn: 'root'
})
export class MockJeopardyService extends JeopardyService  {
  getGameBoard(): Category[] {
    const questions: Question[] = [
      new Question('Who is Elizabeth?', 'Snuggle Bear', 200),
      new Question('Who is Annabelle?', 'Bump-a-lump', 400),
      new Question('Who is Catherine?', 'Chubbs', 600),
      new Question('Who is Molly?', 'Nipps', 800),
      new Question('Who is Mom and Dad?', 'Chance', 1000)
    ];
    return [
      new Category('Nicknames', questions),
      new Category('Nicknames', questions),
      new Category('Nicknames', questions),
      new Category('Nicknames', questions),
      new Category('Nicknames', questions),
      new Category('Nicknames', questions)
    ];
  }
}
