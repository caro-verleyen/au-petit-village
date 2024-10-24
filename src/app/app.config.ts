import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },        // Route pour Home
  { path: 'apropos', component: AproposComponent },  // Route pour À propos
  { path: 'produits', component: ProduitsComponent },  // Route pour Produits
];



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideAnimations(), provideAnimationsAsync(), provideAnimationsAsync()]
};
