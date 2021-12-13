import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { MovieListComponent } from "./movie-list.component";

@NgModule({
  imports:[
    CommonModule,
  ],
  declarations:[
      MovieCardComponent,
      MovieListComponent
  ],
  exports: [
      MovieListComponent,
  ]
})
export class MovieListModule {}