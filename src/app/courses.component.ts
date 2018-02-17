import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
  selector: 'courses',
  template: `
      <h2>{{"3 Authors:"}}</h2>
      <ul>
        <li *ngFor="let author of authors">
          {{author}}
        </li>
      </ul>
      `
})
export class CoursesComponent {
  title = 'List of courses';
  authors;

  constructor(service: CoursesService){
    this.authors = service.getAuthors();
  }

}
