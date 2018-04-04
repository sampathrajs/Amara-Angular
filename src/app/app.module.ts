import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { FacilitiesComponent } from './facilities/facilities.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SafeUrlPipe } from './safe-url.pipe'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    FacilitiesComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,AppRoutingModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDI44QZ1zuxc14jlv0uANNyJLV21JOAo1o'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
