import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sort: string;
  public games = [];

  constructor(private gameService: GameService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(apiResponse => {
      this.games = apiResponse.results;
    });
  }

  searchGames(sort){}
  openGameDetails(gameId){}
}
