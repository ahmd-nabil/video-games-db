import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    console.log(this.activatedRoute.snapshot);
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['game-name']) {
        return this.searchGames(params['game-name']);
      } else {
        return this.getAllGames();
      }
    });
  }

  getAllGames() {
    this.gameService.getGames().subscribe(apiResponse => {
      this.games = apiResponse.results;
    });
  }

  searchGames(name: string) {
    this.gameService.searchGame(name).subscribe(apiResponse => {
      this.games = apiResponse.results;
    });
  }
  openGameDetails(gameId){}
}
