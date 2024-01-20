import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Joke, JokeMainDetails } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class JokesDataService {
  private jokesUrl = "assets/jokes-json.json";
  private jokeTitle:string[]=[];
  constructor(private http: HttpClient) { }
  
  getAllJokes(): Observable<any> {
    let a= this.http.get<any>(this.jokesUrl);
    return a;
  }

  getAllJokesByType(type: string): Observable<any[]> {
    return this.http.get<any[]>(this.jokesUrl).pipe(
      map(jokes => jokes.filter(joke => joke.type === type)),
      map(jokesOfType => this.getRandomTopTwo(jokesOfType))
    );
  }

  private getRandomTopTwo(jokes: any[]): any[] {
    const shuffledJokes = this.shuffleArray(jokes);
    return shuffledJokes.slice(0, 2);
  }

  private shuffleArray(array: any[]): any[] {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
