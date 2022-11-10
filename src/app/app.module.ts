import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenuAccueilComponent } from './contenu-accueil/contenu-accueil.component';
import { RecetteMomentAccueilComponent } from './recette-moment-accueil/recette-moment-accueil.component';
import { HeaderYumamiComponent } from './header-yumami/header-yumami.component';
import { FooterYumamiComponent } from './footer-yumami/footer-yumami.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContenuAccueilComponent,
    RecetteMomentAccueilComponent,
    HeaderYumamiComponent,
    FooterYumamiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
