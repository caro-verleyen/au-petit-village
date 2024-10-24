import { Component, computed, inject, model } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Hero } from '../../models/model.hero';
import { CardComponent } from '../../components/card/card.component';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { CommonModule } from '@angular/common';
import { HeroService } from '../../services/hero/hero.service';

import { NgModule } from '@angular/core';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule,NavbarComponent, CardComponent, SearchBarComponent],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
 heroService =inject(HeroService)
  heros!:Hero[];
  search=model('')

 filteredHeros=computed(()=>{
  return this.heros.filter(hero=>hero.name.includes(this.search()))
 })





  
  constructor(){
  this.heros= this.heroService.getAll()
 }

 

}
