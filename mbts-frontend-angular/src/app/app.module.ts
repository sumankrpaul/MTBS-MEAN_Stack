import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { PopupformContainerComponent } from './popupform-container/popupform-container.component';
import { PopupformComponent } from './popupform/popupform.component';
import { AdminModule } from "./admin-module/admin.module";
import { MovieListModule } from './movie-list/movie-list.module';
import { MoviesHomepageComponent } from './movies-homepage/movies-homepage.component';
import { AdminMovieListComponent } from './admin-module/admin-movie-list/admin-movie-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupformContainerComponent,
    PopupformComponent,
    MoviesHomepageComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AdminModule,
    MovieListModule
  ],
  providers: [
    NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
