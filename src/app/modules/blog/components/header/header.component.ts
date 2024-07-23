import { Component, signal } from '@angular/core';
import { headerIcons } from '../../interface/hearderIcons.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    public arrayIcons = signal<headerIcons[]>([
      {
        src: 'assets/icons/github.svg',
        name: 'John doe'
      },

      {
        src: 'assets/icons/empresa.svg',
        name: 'Google'
      },

      {
        src: 'assets/icons/seguidores.svg',
        name: ' 32 seguidores'
      }
    ])
}
