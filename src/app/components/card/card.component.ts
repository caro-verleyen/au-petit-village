import { Component,input,Input, InputSignal } from '@angular/core';
import { Hero } from '../../models/model.hero';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 hero:InputSignal<Hero>= input (new Hero())
}
