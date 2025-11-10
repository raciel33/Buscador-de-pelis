import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { appRoutingProvide, routing } from './app.routing';
import { SearchComponent } from './components/search/search.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';

const routes: Routes = [
    { path: 'inicio',component:InicioComponent },
    { path: 'search',component:SearchComponent },
    { path: 'detail/:id', component: DetailMovieComponent},


  { path: '**',redirectTo:'inicio'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
