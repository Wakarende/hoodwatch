import { PostsService } from './../../services/posts/posts.service';
import { Posts } from './../../interfaces/posts';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  currentPosts: Posts= {
    post_name: '',
    post_content: '',
    pub_date: false
  };
  message = '';

  constructor(
    private postsservice: PostsService,
    private route: ActivatedRoute,
    private router: Router)
     { }

  ngOnInit(): void {
    this.message = '';
    this.getPosts(this.route.snapshot.paramMap.get('id'));
  }

  getPosts(id: any): void {
    this.postsservice.get(id)
      .subscribe(
        data => {
          this.currentPosts= data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  // Update 
  updatePubDate(status: boolean): void {
    const data = {
      title: this.currentPosts.post_name,
      description: this.currentPosts.post_content,
      published: status
    };

    this.postsservice.update(this.currentPosts.id, data)
      .subscribe(
        response => {
          this.currentPosts.pub_date = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updatePosts(): void {
    this.postsservice.update(this.currentPosts.id, this.currentPosts)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deletePosts(): void {
    this.postsservice.delete(this.currentPosts.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/post']);
        },
        error => {
          console.log(error);
        });
  }

}
