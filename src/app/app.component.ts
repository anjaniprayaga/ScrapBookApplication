import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'live-posts';
}
