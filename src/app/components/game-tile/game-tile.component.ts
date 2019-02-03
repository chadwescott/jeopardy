import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent implements OnInit {
  public text: String;

  constructor() { }

  ngOnInit() {
  }
}
