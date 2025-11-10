import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    SearchComponent,
    DetailMovieComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,




  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
