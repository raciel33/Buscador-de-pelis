import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent {


  public id: any;
  public movie: any ;
  public img = '';

  constructor(private _movieService: MoviesServiceService,
    private _router: ActivatedRoute
  ){
  }

  ngOnInit(): void {

     this._router.params.subscribe(
    params =>{
      this.id = params['id'];
      this._movieService.detailMovie(this.id).subscribe(
        (resp: any)=>{
          this.movie = resp
          console.log(this.movie);

         this.img = 'https://image.tmdb.org/t/p/w500'+ this.movie.backdrop_path


          // // if( resp.data == undefined){
          // //   // this.cliente = undefined
          // // }else{
          // //   this.cliente = resp.data
          // }
      },err=>{

      })
    }
   )

  }
}
