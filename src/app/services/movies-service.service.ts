import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../GLOBAL';
import { Movie } from '../interfaces/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  public url;

  public apiKey;


  constructor(private _http: HttpClient) {

    this.url = GLOBAL.url;
    this.apiKey = GLOBAL.apiKey

  }

get headers(){
  return {
    headers: {
      'Authorization':this.apiKey
     }
   }
}


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}
//Todas las pelis en cartelera
allMovies():Observable<Movie>{

  //https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1

  return this._http.get<Movie>(`${this.url}/movie/now_playing?language=en-US&page=1`, this.headers)
}

//Busqueda por titulo
searchMovie( searchTitle: any):Observable<Movie>{

  //https://api.themoviedb.org/3/search/movie?query=hulk&include_adult=false&language=en-US&page=1

   return this._http.get<Movie>(`${this.url}/search/movie?query=${searchTitle}&include_adult=false&language=en-US&page=1`,this.headers);

  }

  //Pelis mas populares
  rankingMovie():Observable<Movie>{

    //https://api.themoviedb.org/3/person/popular?language=en-US&page=1

    return this._http.get<Movie>(`${this.url}/movie/top_rated?language=en-US&page=1`,this.headers);

  }

   //Detalle de una peli
  detailMovie(id:any):Observable<Movie>{
       //https://api.themoviedb.org/3/movie/18?language=en-US
    return this._http.get<Movie>(`${this.url}/movie/${id}?language=en-US`,this.headers);

  }
}
