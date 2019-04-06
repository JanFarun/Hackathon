import { Component, OnInit } from '@angular/core';
import{JokesService} from 'src/app/services/jokes.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'joke-sphere';
  randomJoke:any = {};

constructor(
  private Jokes :JokesService
){}
  ngOnInit(){
    this.Jokes.getRandomCHuckNoris().subscribe(
      res=>{
        this.randomJoke = res;
        console.log(this.randomJoke)       
      }
    )
  }
}
