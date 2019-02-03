import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export abstract class JeopardyService {
  constructor() { }

  abstract getGameBoard(): Category[];
}
