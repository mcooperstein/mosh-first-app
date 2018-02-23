import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './star/star.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite Changed", eventArgs);
  }

  tweet = {
    body: 'Here is the body of the tweet',
    isLiked: true,
    likesCount: 10
  }

  courses;

  viewMode = 'map';
  canSave = true;

  onAdd(){
    this.canSave=!this.canSave;
    this.courses.push({id:4, name:'course 4'});
  }

  onRemove(course){
      let index = this.courses.indexOf(course);
      this.courses.splice(index,1);
  }

  loadCourses(){
    this.courses = [
      {id:1,name:'course 1'},
      {id:2,name:'course 2'},
      {id:3,name:'course 3'}
    ];
  }
  trackCourse(index, course){
    return course? course.id:undefined;
  }

  task = {
    title: 'Review Application',
    assignee: {
      name: 'John Smith'
    }
  }

}
