import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  getAuthors(){
    return ['Ernest Hemingway', 'F. Scott Fitzgerald', 'J.D. Salinger'];
  }

}
