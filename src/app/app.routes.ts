
import { HomeComponent } from './pages/home/home.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';






 export const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'home',
   component:HomeComponent
  },
  {
    path:'Apropos',
    component:AproposComponent
  },
  {
    path:'Produits',
    component:ProduitsComponent
  },

];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}