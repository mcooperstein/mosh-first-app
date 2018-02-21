import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
  selector: 'books',
  /*template: `
      <h2>{{"3 Authors:"}}</h2>
      <ul>
        <li *ngFor="let author of authors">
          {{author}}
        </li>
      </ul>
      `
      */
      template: `
      <h2>Book: {{book.title | uppercase}}</h2>
      <h3>Author: {{book.author | lowercase}}</h3>
      <h3>Average Rating: {{book.rating | number:'1.2-2'}}</h3>
      <h3>Copies Sold: {{book.copies| number}}</h3>
      <h3>Price: {{book.price | currency}}</h3>
      <h3>Released: {{book.releaseDate | date}}</h3>
      `
})
export class CoursesComponent {
  /*title = 'List of courses';
  authors;

  constructor(service: CoursesService){
    this.authors = service.getAuthors();
  }*/
  book = {
    title: "The Book of Basketball",
    author: "Bill Simmons",
    rating: 4.94921,
    copies: 1987652,
    price: 24.99,
    releaseDate: new Date(2010,1,3)
  }

}
