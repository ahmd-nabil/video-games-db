import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { environment as env } from 'src/environments/environment';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }

  getGames(
    ordering?: string,
    search?: string
  ) : Observable<ApiResponse<Game>> {
    return this.httpClient.get<ApiResponse<Game>>(env.baseUrl);
  }
}
