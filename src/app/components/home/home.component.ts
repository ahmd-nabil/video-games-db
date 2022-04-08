import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sort = ""
  games = []
  constructor() { }

  ngOnInit(): void {
  }

  searchGames(sort){}
  openGameDetails(gameId){}
}
