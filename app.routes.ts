import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component'
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const Routes: Routes = [

  
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'userprofile', component: UserProfileComponent },
]

export { Routes };