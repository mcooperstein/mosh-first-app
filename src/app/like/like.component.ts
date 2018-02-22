import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('isActive') isActive:boolean;
  @Input('likesCount') likesCount:number;
  //@Output() like = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.likesCount += (this.isActive)? -1:1;
    this.isActive = !this.isActive;
  }
}
