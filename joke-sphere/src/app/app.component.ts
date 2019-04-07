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
  randomBSJoke:any = {};
  randomFTJoke:any = {};
  randomMiscJoke:any = {};
  randomProgrammingJoke:any = {};
  showJoke:any = ""
  myJokes: any = []
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
        this.showJoke = this.randomJokeChuck.value;
      }
    )
  }
  onClickMe2(){
    this.Jokes.getRandomGeek().subscribe(
      res=>{
        this.randomJokeGeek = res;
        this.showJoke = this.randomJokeGeek;
      }
    )

  }
  onClickMe3(){
    this.Jokes.getRandomJoke().subscribe(
      res=>{
        this.randomJoke = res;
        this.showJoke = this.randomJoke.setup + " " + this.randomJoke.punchline;
      }
    )
  }

  onClickMe4(){
    this.Jokes.getProgrammingJoke().subscribe(
      res=>{
        this.randomProgrammingJoke = res;
        if (typeof this.randomProgrammingJoke.delivery === 'undefined'){
          this.showJoke = this.randomProgrammingJoke.joke;
        }
        else{
        this.showJoke = this.randomProgrammingJoke.setup + " \n" +this.randomProgrammingJoke.delivery;
        }
      }
    )
  }

  onClickMe5(){
    this.Jokes.getBSJoke().subscribe(
      res=>{
        this.randomBSJoke = res;
        this.showJoke = this.randomBSJoke.phrase;
      }
    )
  }

  onClickMe6(){
    this.Jokes.getFTJoke().subscribe(
      res=>{
        this.randomFTJoke = res;
        this.showJoke = this.randomFTJoke;
      }
    )
  }

  onClickMe7(){
    this.Jokes.getMiscJoke().subscribe(
      res=>{
        this.randomMiscJoke = res;
         //when the joke is in twoparts
        if (typeof this.randomMiscJoke.delivery === 'undefined'){
          this.showJoke = this.randomMiscJoke.joke;
        }
        else{
        this.showJoke = this.randomMiscJoke.setup + " \n" +this.randomMiscJoke.delivery;
        }
      }
    )
  }
  onClickMe10(){
    this.myJokes.push(this.showJoke)
    console.log(this.myJokes)
  }
}
