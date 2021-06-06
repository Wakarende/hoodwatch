import { PostsService } from './../../services/posts/posts.service';
import { Posts } from './../../interfaces/posts';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts?: Posts[];
  currentPost?: Posts;
  currentIndex = -1;
  post_name = '';

  constructor(private postsservice: PostsService) { }

  ngOnInit(): void {
    this.retrievePosts();
  }


  retrievePosts(): void {
    this.postsservice.getAll()
      .subscribe(
        data => {
          this.posts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePosts();
    this.currentPost = undefined;
    this.currentIndex = 0;
  }

  setActivePosts(posts: Posts, index: number): void {
    this.currentPost = posts;
    this.currentIndex = index;
  }

  removeAllPosts(): void {
    this.postsservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  // searchPost(): void {
  //   this.posts.findByPost_Name(this.post_name)
  //     .subscribe(
  //       data => {
  //         this.posts = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }





}
