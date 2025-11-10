import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ModuleWithProviders } from "@angular/core";
import { SearchComponent } from "./components/search/search.component";
import { DetailMovieComponent } from "./components/detail-movie/detail-movie.component";

const appRoute : Routes = [
 { path: '', component: InicioComponent},



]

 export const appRoutingProvide: any [] = [];

export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoute);
