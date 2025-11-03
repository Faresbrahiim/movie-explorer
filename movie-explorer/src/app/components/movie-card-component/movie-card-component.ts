import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MovieItem } from '../../model/movies';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-movie-card-component',
  standalone: true,
  imports : [CommonModule , RouterModule],
  templateUrl: './movie-card-component.html',
  styleUrls: ['./movie-card-component.css'],
})
export class MovieCardComponent {
  @Input() movie!: MovieItem;  // single movie
  // use state 
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['movie'] && changes['movie'].currentValue) {
  //     console.log('Movie received in card:', changes['movie'].currentValue);
  //   }
  // }
}
