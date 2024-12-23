import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss',
})
export class CatCardComponent {
  @Input() name: string = '';
  @Input() img: string = '';
}
