import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  good = true;
  @Input() isFavorite:boolean;

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
