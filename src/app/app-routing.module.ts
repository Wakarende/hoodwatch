import { PostsComponent } from './components/posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'

const routes: Routes = [

  // { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '', component: PostsComponent },
  { path: 'update/:id', component: PostsComponent },
  { path: 'delete/:id', component: PostsComponent },
  { path: 'add', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

