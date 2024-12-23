import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatCardComponent } from './cat-card/cat-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    CatCardComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  postName = [
    'Luna',
    'Milo',
    'Kitty',
    'Hugo',
    'Oreo',
    'Bella',
    'Billy',
    'Nala',
  ];

  postImages = [
    'assets/img/cats/1.jpg',
    'assets/img/cats/2.jpg',
    'assets/img/cats/3.jpg',
    'assets/img/cats/4.jpg',
    'assets/img/cats/5.jpg',
    'assets/img/cats/6.jpg',
    'assets/img/cats/7.jpg',
    'assets/img/cats/8.jpg',
  ];

  buttonClice() {
    alert('Hallo!');
  }
}
