import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {FacilitiesComponent} from '../facilities/facilities.component';
import {AboutComponent} from '../about/about.component';
import {ContactComponent} from '../contact/contact.component';
import {GalleryComponent} from '../gallery/gallery.component';
import {TestComponent} from '../test/test.component';

const routes: Routes =[
  { path:'home',component:HomeComponent},  
  { path:'facilities',component:FacilitiesComponent},
   { path:'gallery',component:GalleryComponent},
   { path:'contact',component:ContactComponent},  
   { path:'about',component:AboutComponent},  
   { path:'test',component:TestComponent},    
  { path:'',redirectTo: 'home', pathMatch: 'full' },   
  ];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
