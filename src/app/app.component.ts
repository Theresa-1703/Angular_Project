import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CatCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  postName = ['Luna', 'Milo', 'Kitty', 'Hugo', 'Oreo'];
  postImages = [
    'assets/img/cats/1.jpg',
    'assets/img/cats/2.jpg',
    'assets/img/cats/3.jpg',
    'assets/img/cats/4.jpg',
    'assets/img/cats/5.jpg',
  ];

  buttonClice() {
    alert('Hallo!');
  }
}
