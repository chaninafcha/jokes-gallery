// joke-details.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Joke } from '../models/login.model';
import { JokesDataService } from '../services/jokes-data.service';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.scss']
})
export class JokeDetailsComponent implements OnInit {
  joke: Joke;
  suggestedJokes!: Joke[];
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: { joke: Joke },private jokeService: JokesDataService) {
    this.joke = data.joke;

  }
  ngOnInit() {
    this.getAllJokesByType();
  }


  getAllJokesByType()
{
  this.jokeService.getAllJokesByType(this.joke.type).subscribe((data)=>
   this.suggestedJokes=data

  )
}
}






