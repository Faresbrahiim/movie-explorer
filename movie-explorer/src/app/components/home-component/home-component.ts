import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../services/movie';
import { MovieItem } from '../../model/movies';
import { MovieCardComponent } from '../movie-card-component/movie-card-component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule , MovieCardComponent],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.css'],
})
export class HomeComponent implements OnInit {
  movies: MovieItem[] = [];

  // Inject the Movie service
  movieService = inject(Movie)
  constructor() { }
  ngOnInit() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }
}
