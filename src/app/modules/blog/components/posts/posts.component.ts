import { Component, inject, signal } from '@angular/core';
import { Posts } from '../../interface/Posts.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogPostsComponent } from '../dialog/dialog-posts/dialog-posts.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  #dialog = inject(MatDialog)
    public arrayPosts = signal<Posts[]>([

      {
        title: 'JavaScript data types and data structures',
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt exercitationem cupiditate, rerum voluptatum obcaecati dolorem voluptatem nobis aut provident iusto, reprehenderit odit minus suscipit impedit omnis mollitia fugiat perferendis quod. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, vero animi. Id ullam, nostrum, rem labore nulla eligendi, culpa perspiciatis facere dolore illum itaque temporibus commodi modi distinctio? Culpa, vero.",
        
        width: "416px",
        height: "260px",

        dataPost: "Há 1 dia"
      },

      {
        title: 'JavaScript data types and data structures',
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt exercitationem cupiditate, rerum voluptatum obcaecati dolorem voluptatem nobis aut provident iusto, reprehenderit odit minus suscipit impedit omnis mollitia fugiat perferendis quod. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, vero animi. Id ullam, nostrum, rem labore nulla eligendi, culpa perspiciatis facere dolore illum itaque temporibus commodi modi distinctio? Culpa, vero.",

        width: "416px",
        height: "260px",

        dataPost: "Há 1 dia"
      },

      {
        title: 'JavaScript data types and data structures',
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt exercitationem cupiditate, rerum voluptatum obcaecati dolorem voluptatem nobis aut provident iusto, reprehenderit odit minus suscipit impedit omnis mollitia fugiat perferendis quod. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, vero animi. Id ullam, nostrum, rem labore nulla eligendi, culpa perspiciatis facere dolore illum itaque temporibus commodi modi distinctio? Culpa, vero.",

        width: "416px",
        height: "260px",

        dataPost: "Há 1 dia"
      },

      {
        title: 'JavaScript data types and data structures',
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt exercitationem cupiditate, rerum voluptatum obcaecati dolorem voluptatem nobis aut provident iusto, reprehenderit odit minus suscipit impedit omnis mollitia fugiat perferendis quod. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, vero animi. Id ullam, nostrum, rem labore nulla eligendi, culpa perspiciatis facere dolore illum itaque temporibus commodi modi distinctio? Culpa, vero.",

        width: "416px",
        height: "260px",

        dataPost: "Há 1 dia"
      },

      {
        title: 'JavaScript data types and data structures',
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt exercitationem cupiditate, rerum voluptatum obcaecati dolorem voluptatem nobis aut provident iusto, reprehenderit odit minus suscipit impedit omnis mollitia fugiat perferendis quod. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, vero animi. Id ullam, nostrum, rem labore nulla eligendi, culpa perspiciatis facere dolore illum itaque temporibus commodi modi distinctio? Culpa, vero.",

        width: "416px",
        height: "260px",

        dataPost: "Há 1 dia"
      },

      {
        title: 'JavaScript data types and data structures',
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt exercitationem cupiditate, rerum voluptatum obcaecati dolorem voluptatem nobis aut provident iusto, reprehenderit odit minus suscipit impedit omnis mollitia fugiat perferendis quod. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, vero animi. Id ullam, nostrum, rem labore nulla eligendi, culpa perspiciatis facere dolore illum itaque temporibus commodi modi distinctio? Culpa, vero.",

        width: "416px",
        height: "260px",

        dataPost: "Há 1 dia"
      }
    ])

    public openDialog(data: Posts){
      this.#dialog.open(DialogPostsComponent, {
        data, 
        panelClass: EDialogPanelClass.POSTS
      })
    }
}
