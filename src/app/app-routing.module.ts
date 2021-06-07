import { NeighbourhoodDetailsComponent } from './components/neighbourhood-details/neighbourhood-details.component';
import { BusinessComponent } from './components/business/business.component';
import { UsersComponent } from './components/users/users.component';
import { NeighbourhoodComponent } from './components/neighbourhood/neighbourhood.component';
import { PostsComponent } from './components/posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';
const routes: Routes = [

  { path: '', redirectTo: 'neighbourhood', pathMatch: 'full' },
  // post 
  { path: 'post', component: PostsComponent },
  { path: 'post/:id', component: PostDetailsComponent},
  { path: 'post/update/:id', component: PostDetailsComponent },
  { path: 'post/delete/:id', component: PostDetailsComponent },

  // neighbourhood 
  { path: 'neighbourhood', component: NeighbourhoodComponent },
  { path: 'neighbourhood/:id', component: NeighbourhoodDetailsComponent },
  { path: 'update/:id', component: NeighbourhoodDetailsComponent },
  { path: 'delete/:id', component: NeighbourhoodDetailsComponent },

  // business 
  { path: 'business', component: BusinessComponent },
  { path: 'business/:id', component: BusinessDetailsComponent},
  { path: 'business/update/:id', component: BusinessDetailsComponent },
  { path: 'business/delete/:id', component: BusinessDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

