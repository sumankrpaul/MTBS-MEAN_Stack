import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminListComponent } from "./admin-list/admin-list.component";
import { AdminMovieListComponent } from "./admin-movie-list/admin-movie-list.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
    {
      path: '',
      component: AdminComponent,
      children:[{
        path: 'admin-list',
        component: AdminListComponent
      },{
        path: 'movie-list',
        component: AdminMovieListComponent
      }
    ]
    }, 
    
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
  