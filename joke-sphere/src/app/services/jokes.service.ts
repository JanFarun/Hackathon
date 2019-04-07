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

  getProgrammingJoke(){
    return this.http.get('https://sv443.net/jokeapi/category/Programming');
  }

  getBSJoke(){
    return this.http.get('https://corporatebs-generator.sameerkumar.website/');
  }

  getFTJoke(){
    return this.http.get('https://helloacm.com/api/fortune/?');
  }

  getMiscJoke(){
    return this.http.get('https://sv443.net/jokeapi/category/Miscellaneous');
  }


}

