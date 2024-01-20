// gallery.component.ts
import { Component, OnInit } from '@angular/core';
import { JokesDataService } from '../services/jokes-data.service';
import { Joke } from '../models/login.model';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { JokeDetailsComponent } from '../joke-details/joke-details.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  jokes: Joke[] = [];

  constructor(private jokeService: JokesDataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadJokes();
  }

  loadJokes() {
    this.jokeService.getAllJokes().subscribe(data=>{
      this.jokes=data;
    }
    );
  }


  openJokeDetails(joke: Joke): void {
    this.dialog.open(JokeDetailsComponent, {
      data: { joke },
      width: 'auto', // Set width to auto
      maxWidth: '90%', 
    });
  }
}
