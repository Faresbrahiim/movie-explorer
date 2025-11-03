
import { Injectable } from '@angular/core';
import { MovieItem } from '../model/movies';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Movie{
private movieApi = 'http://localhost:3000/movies';
  constructor(private http: HttpClient) {}

  // Fetch all movies
  getMovies(): Observable<MovieItem[]> {
    console.log(this.http.get<MovieItem[]>(this.movieApi))
    return this.http.get<MovieItem[]>(this.movieApi);
  }

  // Search movies by title
  searchMovies(query: string): Observable<MovieItem[]> {
    return this.http.get<MovieItem[]>(`${this.movieApi}?title_like=${query}`);
  }
}
