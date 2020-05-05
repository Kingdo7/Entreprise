import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css'],
})
export class PersonneComponent implements OnInit {
  @Input() post: any;
  details_personne: any;

  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(): void {
    this.details_personne = JSON.parse(this.post);
  }
}
