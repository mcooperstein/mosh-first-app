import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = "3 Authors:";
  authors = ['Ernest Hemingway', 'F. Scott Fitzgerald', 'J.D. Salinger'];
  constructor() { }

  ngOnInit() {
  }



}
