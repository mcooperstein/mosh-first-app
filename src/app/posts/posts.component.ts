import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url='https://jsonplaceholder.typicode.com/posts';
  // Get
  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response =>{
        this.posts = response.json();
      })
  }

  ngOnInit() {
  }
  // Create
  createPost(input: HTMLInputElement){
    let userPost = {title:input.value}
    input.value = "";
    this.http.post(this.url, JSON.stringify(userPost))
      .subscribe(response=>{
        userPost['id'] = response.json().id;
        this.posts.splice(0,0,userPost);
        //console.log(response.json())
      })
  }
  // Update
  updatePost(post){
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead:true}))
      .subscribe(response=>{
        console.log(response.json());
      })
    //this.http.put(this.url, JSON.stringify(post))
  }
  // Delete

  deletePost(post){
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response=>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      })
  }

}
