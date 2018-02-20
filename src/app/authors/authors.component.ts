import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = "3 Authors:";
  isActive=false;
  authors;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

  onDivClick($event){
    console.log("Div was clicked", $event);
  }

  onSave($event){
    $event.stopPropagation();
    console.log("button was clicked", $event);
  }


}
