import { BusinessComponent } from './components/business/business.component';
import { UsersComponent } from './components/users/users.component';
import { NeighbourhoodComponent } from './components/neighbourhood/neighbourhood.component';
import { PostsComponent } from './components/posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'

const routes: Routes = [

  { path: '', redirectTo: 'neighbourhood', pathMatch: 'full' },
  { path: 'post', component: PostsComponent },
  { path: 'post/update/:id', component: PostsComponent },
  { path: 'post/delete/:id', component: PostsComponent },
  { path: 'neighbourhood', component: NeighbourhoodComponent },
  { path: 'update/:id', component: NeighbourhoodComponent },
  { path: 'delete/:id', component: NeighbourhoodComponent },
  { path: 'business/', component: BusinessComponent },
  { path: 'business/update/:id', component: BusinessComponent },
  { path: 'business/delete/:id', component: BusinessComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

