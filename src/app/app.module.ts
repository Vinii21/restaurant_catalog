import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ForkComponent } from './components/fork/fork.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { RandomComponent } from './components/random/random.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ForkComponent,
    PromotionComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
