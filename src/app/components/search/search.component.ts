import { Component } from '@angular/core';
import { GLOBAL } from 'src/app/GLOBAL';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public movies: any = [];
   public url: any;

  public img = ''
   constructor( private _moviesService: MoviesServiceService){
      this.url = GLOBAL.url
      this.img = 'https://image.tmdb.org/t/p/w500/'



    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.rankingMovie()

    }

    rankingMovie(){
          this._moviesService.rankingMovie().subscribe(
            (resp: any)=>{
              this.movies = resp.results
              console.log(this.movies);
      }
  )
}
}
