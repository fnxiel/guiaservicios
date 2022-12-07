import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeraPantallaComponent } from './primera-pantalla/primera-pantalla.component';
import { SegundaPantallaComponent } from './segunda-pantalla/segunda-pantalla.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeraPantallaComponent,
    SegundaPantallaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
