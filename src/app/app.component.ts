import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FooterComponent } from './footer/footer.component';
import{ MatSortModule } from '@angular/material/sort'
import { RouterLink, RouterLinkActive, RouterOutlet,RouterModule } from '@angular/router';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, RouterLink, RouterLinkActive, NavbarComponent,MatSortModule,RouterModule],
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
 
})

export class AppComponent {
  title='routing-app';

}
