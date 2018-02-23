import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  showBilling = false;
  showShipping = false;

  constructor() { }

  ngOnInit() {
  }

  toggleBilling(){
    this.showBilling=!this.showBilling;
  }
  toggleShipping(){
    this.showShipping=!this.showShipping;
  }

}
