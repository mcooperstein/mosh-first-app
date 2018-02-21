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
      <h4>Summary: {{book.text | summary}}</h4>
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
    releaseDate: new Date(2010,1,3),
    text: `
    "The Book of Basketball is a 700-page work of hoops genius that would make Dr. James Naismith beam proudly – and probably blush. Author Bill Simmons, best known as ESPN.com's "The Sports Guy," explores the NBA with hilarious insight, brilliant analysis, and a bevy of irreverent footnotes. Simmons is a fan first – a fact best explained in an entertaining foreword by Malcolm Gladwell – and writes from the stands, not the press room. His knowledge and passion for the game provide him with few peers, yet his voice represents those who stick by their teams through thick and thin. As a result, The Book of Basketball is not just a tribute to hardwood heroes, but also a celebration of yelling at TV sets, revering lucky jerseys, and holding our breath until the final buzzer sounds. Throw in pages of nearly-insane statistical breakdowns (including a projected boxscore from the movie Teen Wolf), and it's easy to see why fans of all levels should clear shelf space for this instant classic.  --Dave Callanan"
    `
  }

}
