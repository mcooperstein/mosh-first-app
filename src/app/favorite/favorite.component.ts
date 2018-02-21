import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  good = true;
  isFavorite=true;

  constructor() { }

  ngOnInit() {
  }

  like(){
    this.good = true;
  }

  dislike(){
    this.good = false;
  }

  onToggle(){
    this.isFavorite = !this.isFavorite;
  }

}
