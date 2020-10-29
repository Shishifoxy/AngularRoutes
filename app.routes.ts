import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component'

const Routes: Routes = [

  
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
]

export { Routes };