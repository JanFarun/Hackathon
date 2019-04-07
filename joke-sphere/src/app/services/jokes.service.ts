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

  getRandomGeek(){
    return this.http.get('https://geek-jokes.sameerkumar.website/api');
  }

  getRandomJoke(){
    return this.http.get('https://official-joke-api.appspot.com/random_joke');
  }

  getRandomDadJoke(){
    return this.http.get('https://icanhazdadjoke.com');
  }
}
