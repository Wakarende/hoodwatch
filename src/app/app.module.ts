import { RouterModule } from '@angular/router';
import { UserService } from './services/users/user.service';
import { BusinessService } from './services/bizz/business.service';
import { HttpClientModule } from '@angular/common/http';
import { NeighbourhoodService } from './services/hood/neighbourhood.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeighbourhoodComponent } from './components/neighbourhood/neighbourhood.component';
import { BusinessComponent } from './components/business/business.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NeighbourhoodDetailsComponent } from './components/neighbourhood-details/neighbourhood-details.component';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';
import { NeighbourhoodListComponent } from './components/neighbourhood-list/neighbourhood-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NeighbourhoodComponent,
    BusinessComponent,
    UsersComponent,
    PostsComponent,
    PostListComponent,
    PostDetailsComponent,
    NeighbourhoodDetailsComponent,
    BusinessListComponent,
    BusinessDetailsComponent,
    NeighbourhoodListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule


  ],
  providers: [NeighbourhoodService,BusinessService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
