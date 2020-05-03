import { Component } from '@angular/core';

@Component({
  selector: 'app-individu',
  templateUrl: './individu.component.html',
  styleUrls: ['./individu.component.css'],
})
export class IndividuComponent {
  createNewIndividu() {}

  id = 0;
  nom = 'Machin';
  societe = 'Corp';
  site = 'doge.com';
  tel = '01';
  email = 'doge@doga.com';
  adresse = 'Ici';

  // "id": 1,
  // "name": "Leanne Graham",
  // "username": "Bret",
  // "email": "Sincere@april.biz",
  // "address": {
  //   "street": "Kulas Light",
  //   "suite": "Apt. 556",
  //   "city": "Gwenborough",
  //   "zipcode": "92998-3874",
  //   "geo": {
  //     "lat": "-37.3159",
  //     "lng": "81.1496"
  //   }
  // },
  // "phone": "1-770-736-8031 x56442",
  // "website": "hildegard.org",
  // "company": {
  //   "name": "Romaguera-Crona",
  //   "catchPhrase": "Multi-layered client-server neural-net",
  //   "bs": "harness real-time e-markets"
  // }
}
