import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie} from '../../services/movie';
import { MovieItem } from '../../model/movies';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.css'],
})
export class HomeComponent implements OnInit {
  movies: MovieItem[] = [];

  // Inject the Movie service
  constructor(private movieService: Movie) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
      console.log('Movies loaded:', this.movies);
    });
  }
}
