import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: HttpClient) { }

  getRandomCHuckNoris(){
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }
}
