import { PostsService } from './../../services/posts/posts.service';
import { Posts } from './../../interfaces/posts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts= {
    id:Number(''),
    post_name: '',
    post_content: '',
    published: false
  };
  submitted = false;



  constructor(private postsservice:PostsService) { }

  ngOnInit(): void {
    
  }
// Create 
  savePosts(): void {
    const data = {
      post_name: this.posts.post_name,
      post_content: this.posts.post_content
    };
    this.postsservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPosts(): void {
    this.submitted = false;
    this.posts = {
      id: '',
      post_name: '',
      post_content: '',
      published: false
    };
  }
}

