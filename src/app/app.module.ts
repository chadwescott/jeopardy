import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { MockJeopardyService } from './services/mock-jeopardy.service';
import { JeopardyService } from './services/jeopardy.service';
import { GameTileComponent } from './components/game-tile/game-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameTileComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [
    {
      provide: JeopardyService,
      useClass: MockJeopardyService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
