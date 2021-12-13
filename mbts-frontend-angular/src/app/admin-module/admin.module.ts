import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MovieListModule } from "../movie-list/movie-list.module";
import { AdminMovieListComponent } from "./admin-movie-list/admin-movie-list.component";
import { AdminNavbarComponent } from "./admin-navbar/admin-navbar.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin/admin.component";

@NgModule({
  imports:[
    CommonModule,
    AdminRoutingModule,
    MovieListModule
  ],
  declarations:[
    AdminComponent,
    AdminNavbarComponent,
    AdminMovieListComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule {}