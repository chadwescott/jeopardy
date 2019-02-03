import { Component, OnInit } from '@angular/core';
import { JeopardyService } from 'src/app/services/jeopardy.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  public categories: Category[];

  constructor(private jeopardyService: JeopardyService) {
  }

  ngOnInit() {
    this.categories = this.jeopardyService.getGameBoard();
  }
}
