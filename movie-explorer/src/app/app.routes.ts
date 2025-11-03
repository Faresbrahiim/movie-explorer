import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { MovieDetailComponent } from './components/movie-detail-component/movie-detail-component';
import { FavoritesComponent } from './components/favorites-component/favorites-component';

// we'll define the routes here ....
// HTML5 History API mecanism to not realod page each time 
// history.pushState()  add new url to the browser ... then based on the url it render the components to <router-outlet> a
// after destroying the past components.....  with ngOnDestroy()
export const routes: Routes = [
    {path : ''  , component : HomeComponent},
    {path : 'details'  , component : MovieDetailComponent},
    {path: 'favorite' ,  component : FavoritesComponent},
];
