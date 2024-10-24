import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPrice',
  standalone: true
})
export class OrderByPricePipe implements PipeTransform {

  transform(hero: any[], order: 'asc' | 'desc' = 'asc'): any[] {
    if (!hero ) {
      return [];
    }
const sortedHero=hero.sort((a,b)=>{
  const prixA=a.prix||0
  const prixB=b.prix||0
  return prixA- prixB
})

if(order==='desc'){
  return sortedHero.reverse()
}
  return sortedHero
}
   
}