import { Injectable } from '@angular/core';
import { Hero } from '../../models/model.hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 

  heros:Hero[] = []
  getHeroCards: any;
  
  
 


  constructor() {
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

private save(){
  localStorage.setItem('hero',JSON.stringify(this.heros))
}
 private load(){
  const heroData= localStorage.getItem('heros')
  if (heroData){
    this.heros= JSON.parse(heroData).map((heroJSON:any)=>Object.assign(new Hero(),heroJSON))
  }
 }
  getAll():Hero[]{
    return this.heros.map(hero=>hero.copy())
  }


}
