import { Component } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Projet A';

  posts: any;

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
}
