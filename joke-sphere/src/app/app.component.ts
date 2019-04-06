import { Component, OnInit } from '@angular/core';
import{JokesService} from 'src/app/services/jokes.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'joke-sphere';
  randomJokeChuck:any = {};
  randomJokeGeek:any = {};
  randomJoke:any = {};
constructor(
  private Jokes :JokesService
){}
  ngOnInit(){
    //get chuck noris joke and save it to randomJokeChuck dictionary
    this.Jokes.getRandomCHuckNoris().subscribe(
      res=>{
        this.randomJokeChuck = res;
        console.log(this.randomJokeChuck)       
      }
    )
    //get random geek joke and save it to randomJokeGeek dictionary
    this.Jokes.getRandomGeek().subscribe(
      res=>{
        this.randomJokeGeek = res;
        console.log(this.randomJokeGeek)       
      }
    )

    this.Jokes.getRandomJoke().subscribe(
      res=>{
        this.randomJoke = res;
        console.log(this.randomJoke)       
      }
    )
  }
}
