import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data= [
    {
      'name':'A',
      'location': 'MTM',
      "pincode": 510210
    },
    {
      'name':'B',
      'location': 'MAS',
      "pincode": 501201
    },
    {
      'name':'F',
      'location': 'MAS',
      "pincode": 552001
    },
    {
      'name':'B',
      'location': 'MAS',
      "pincode": 521002
    },
    {
      'name':'B',
      'location': 'MAS',
      "pincode": 521501
    },
    {
      'name':'H',
      'location': 'MAS',
      "pincode": 521006
    },
    {
      'name':'M',
      'location': 'MAS',
      "pincode": 521008
    },
    {
      'name':'C',
      'location': 'MAS',
      "pincode": 521045
    },
    {
      'name':'E',
      'location': 'MAS',
      "pincode": 521501
    },
    {
      'name':'R',
      'location': 'MAS',
      "pincode": 521031
    }
  ];
  headers = ["Names", "Location", "Pincode"];
  constructor() {
  }
}
