import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchComponent } from '../../components/search/search.component';
import { PostsComponent } from '../../components/posts/posts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SearchComponent, PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
