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
  showJoke:any = "show joke here ..."
constructor(
  private Jokes :JokesService
){}
  ngOnInit(){
    //get chuck noris joke and save it to randomJokeChuck dictionary

    //get random geek joke and save it to randomJokeGeek dictionary
  }

  onClickMe1(){
    this.Jokes.getRandomCHuckNoris().subscribe(
      res=>{
        this.randomJokeChuck = res;
      }
    )
    this.showJoke = this.randomJokeChuck.value;
  }
  onClickMe2(){
    this.Jokes.getRandomGeek().subscribe(
      res=>{
        this.randomJokeGeek = res;     
      }
    )
    this.showJoke = this.randomJokeGeek;
  }
  onClickMe3(){
    this.Jokes.getRandomJoke().subscribe(
      res=>{
        this.randomJoke = res;     
      }
    )
    this.showJoke = this.randomJoke.setup + " " + this.randomJoke.punchline;
  }
}
