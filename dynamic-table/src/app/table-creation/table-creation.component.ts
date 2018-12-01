import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-creation',
  templateUrl: './table-creation.component.html',
  styleUrls: ['./table-creation.component.css']
})
export class TableCreationComponent implements OnInit {
  @Input('jsonData') jsonData;
  @Input('headers') headers;
  @Input('search') searchFeature;
  @Input('sorting') sortingFeature;

  public keys = [];
  public x;
  public arrayData = [];
  public arrayLength = [];
  public searchText;
  public sortingKey;
  public order = -1;

  constructor() {

  }

  ngOnInit() {
    this.createArray();
  }

  public createArray() {
    this.x = this.jsonData;
    this.keys = Object.keys(this.x[0]);
    for (let i = 0; i < this.keys.length; i++) {
      this.arrayLength.push(i);
    }
  }

  public sorting(key1, key2) {
    console.log(key2);
    if (this.sortingFeature) {
      this.sortingKey = key1;
      if (this.sortingKey == key1) {
        this.order = -(this.order);
      }
    }
  }
}
