export class Hero{
    id:number=-1
   image:string="obelix.png"
   prix:number=30
   name:string="obelix"
   description:string="figurine en plastique recyclé peinte à la main"
 

   copy():Hero{
    return Object.assign(new Hero(), this)
   }
}
