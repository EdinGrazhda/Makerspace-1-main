import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private moviesService: MoviesService,private router:Router,private authservice:AuthService) {}

  moviesList: any;
  ngOnInit(): void {
    this.moviesService.movies().subscribe((data) => {
      console.log(data);
      this.moviesList = data;
      for (let movie of this.moviesList.results) {
        movie.poster_path = `https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`;
        console.log(movie.poster_path);
      }
    });
  }
  logOut(){
    // localStorage.clear() eshte per kreta localstoragen me fshi
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
}
}