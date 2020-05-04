import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-individu',
  templateUrl: './individu.component.html',
  styleUrls: ['./individu.component.css'],
})
export class IndividuComponent implements OnInit {
  @Input() post: any;
  infosIndividu: any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.infosIndividu = JSON.parse(this.post);
  }
}
