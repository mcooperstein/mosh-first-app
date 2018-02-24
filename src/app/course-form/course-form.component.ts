import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  courses = [
    {name:'Web Development 101', id:1},
    {name:'Underwater Basket Weaving 101', id:2},
    {name:'Pizza Making 101', id:3},
  ];

  constructor() { }

  ngOnInit() {
  }
submit(f){
  console.log(f);
}

}
