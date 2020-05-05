import { Component } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: 'ProjetA';
  posts: any;
  clic_list: boolean;
  details_pers_value: any;
  alignement = 'center';

  constructor(private webService: WebServiceService) {}

  ExecuteWs() {
    this.webService.getPosts().subscribe((data) => {
      this.posts = data;
      this.posts.forEach((post) => {
        console.log(`Element n°${post.id} :`);
        console.log(post.name);
      });
    });
  }

  affich_details(post: any): void {
    this.details_pers_value = JSON.stringify(post);
    this.clic_list = true;
  }
}
