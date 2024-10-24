import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { CardComponent } from '../../components/card/card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { Hero } from '../../models/model.hero';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { OrderByPricePipe } from "../../order-by-price.pipe";






@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardComponent, SearchBarComponent, CommonModule, FormsModule, MatSortModule,  OrderByPricePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  



  

  heros!:Hero[];
  cards!: any[];



 
  constructor(){
    this.heros=[]
 const hero1=new Hero();
  hero1.image="obelix.png"
  hero1.prix=30
  hero1.name="obelix"
  hero1.description="figurine en plastique recyclé peinte à la main"
  this.heros.push(hero1)

 const hero2=new Hero();
 hero2.image="idefix.png"
 hero2.prix=20
 hero2.name="idefix"
 hero2.description="figurine en plastique recyclé peinte à la main"
 this.heros.push(hero2)

 const hero3=new Hero();
 hero3.image="assurancetourix.png"
 hero3.prix=40
 hero3.name="assurancetourix"
 hero3.description="figurine en plastique recyclé peinte à la main"
 this.heros.push(hero3)

 const hero4=new Hero();
 hero4.image="romain.png"
 hero4.prix=20
 hero4.name="romain"
 hero4.description="figurine en plastique recyclé peinte à la main"
 this.heros.push(hero4)

 const hero5=new Hero();
 hero5.image="bagarre.png"
 hero5.prix=60
 hero5.name="bagarre"
 hero5.description="figurine en plastique recyclé peinte à la main"
 this.heros.push(hero5)
 const hero6=new Hero();
 hero6.image="asterix-obelix.png"
 hero6.prix=55
 hero6.name="asterix-obelix"
 hero6.description="figurine en plastique recyclé peinte à la main"
 this.heros.push(hero6)
 }

 sortOrder: 'asc' | 'desc' = 'asc';

  

 
toggleOrder() {
   

this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';

 }
}
  



