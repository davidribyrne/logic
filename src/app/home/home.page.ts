import { Component } from '@angular/core';
import {Game} from '../game/game';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage
{
    game:Game;

    start(): void
    {
        this.game = new Game(10);
        this.game.play();
    }

}
