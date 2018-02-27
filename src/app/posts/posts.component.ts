import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  // Get
  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }
  // Create
  createPost(input: HTMLInputElement){
    let userPost = {title:input.value}
    this.posts.splice(0,0,userPost);
    input.value = "";
    this.service.create(userPost)
      .subscribe(
        newPost=>{
        userPost['id'] =  newPost.id;

        //console.log(response.json())
      }, (error: AppError)=>{
      this.posts.splice(0,1);

      if(error instanceof BadInput){
        //this.form.setErrors(error.originalError);
      } else {
      throw error;
    }
    })
  }
  // Update
  updatePost(post){
    this.service.update(post)
      .subscribe(
        updatedPost=>{
        console.log(updatedPost);
      })
    //this.http.put(this.url, JSON.stringify(post))
  }
  // Delete

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
    this.service.delete(post.id)
      .subscribe(
        null,
        (error: AppError)=>{
        this.posts.splice(index,0,post);

        if(error instanceof NotFoundError){
          alert('This post has already been deleted');
        } else {
          throw error;
        }
    })
  }

}
