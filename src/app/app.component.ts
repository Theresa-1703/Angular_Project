import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CatCardComponent } from './cat-card/cat-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CatCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

  
})
export class AppComponent {
  title = 'angularTest';


}

