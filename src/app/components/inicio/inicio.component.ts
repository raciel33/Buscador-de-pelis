import { Component } from '@angular/core';
import { fromEvent, map } from 'rxjs';
import { GLOBAL } from 'src/app/GLOBAL';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  public movies: any = [];

  public allMoviesNow: any = []

  public moviesAccion: any = [];

  public url: any;

  public img = ''
   public load_btn = false;

   public genre = '';



//ordenar productos
  public sort_by= '';

  public title= ''


  constructor( private _moviesService: MoviesServiceService){
    this.url = GLOBAL.url
    this.img = 'https://image.tmdb.org/t/p/w500/'


  }



allMovies(){
  this._moviesService.allMovies().subscribe(
    (resp: any)=>{
      this.allMoviesNow = resp.results
      console.log(this.allMoviesNow);
    }
  )
}


ngOnInit(): void {

  this.allMovies()

}



searchMovie( title:string){
  console.log(this.title);
    this._moviesService.searchMovie(title).subscribe(
      (resp:any)=>{

       // console.log(resp);
        this.movies = resp.results
      }
    )
}


rankingMovie(){
          this._moviesService.rankingMovie().subscribe(
            (resp: any)=>{
              this.movies = resp.results
              console.log(this.movies);
      }
  )
}

searchGenre(){
  console.log(this.genre);

  this.movies = []
   switch(this.genre){
      case 'accion':
         this.allMoviesNow.forEach((element:any) => {
          console.log(element);
           if ((element.genre_ids).indexOf(28)>=0) {
              this.movies.push(element)
           }
         });
       break;
      case 'aventura':
         this.allMoviesNow.forEach((element:any) => {
          console.log(element);
           if ((element.genre_ids).indexOf(12)>=0) {
              this.movies.push(element)
           }
         });
       break;
      case 'terror':
         this.allMoviesNow.forEach((element:any) => {
          console.log(element);
           if ((element.genre_ids).indexOf(27)>=0) {
              this.movies.push(element)
           }
         });
       break;
      case 'crimen':
         this.allMoviesNow.forEach((element:any) => {
          console.log(element);
           if ((element.genre_ids).indexOf(80)>=0) {
              this.movies.push(element)
           }
         });
       break;
      case 'comedia':
         this.allMoviesNow.forEach((element:any) => {
          console.log(element);
           if ((element.genre_ids).indexOf(35)>=0) {
              this.movies.push(element)
           }
         });
       break;
      case 'drama':
         this.allMoviesNow.forEach((element:any) => {
          console.log(element);
           if ((element.genre_ids).indexOf(18)>=0) {
              this.movies.push(element)
           }
         });
       break;
      case 'animation':
         this.allMoviesNow.forEach((element:any) => {
          console.log(element);
           if ((element.genre_ids).indexOf(16)>=0) {
              this.movies.push(element)
           }
         });
         break;
      }

     // ;
   }


 sortBy( sort_by: string){

   //orden alfabetico
   if(sort_by == 'aZ'){
    this.movies.sort(function(a: any,b: any){ if(a.original_title > b.original_title){
        return 1
       }
       if(a.original_title < b.original_title){
         return -1
       }
      return 0
    })
  }
  //orden inverso
  else if(sort_by == 'zA'){
    this.movies.sort(function(a: any,b: any){
       if(a.original_title < b.original_title){
        return 1
       }
       if(a.original_title > b.original_title){
        return -1
       }
      return 0
   })
 }
 //release_date
  if(sort_by == 'estreno'){
    this.movies.sort(function(a: any,b: any){ if(a.release_date > b.release_date){
        return 1
       }
       if(a.release_date < b.release_date){
         return -1
       }
      return 0
    })
  }
 }
}









