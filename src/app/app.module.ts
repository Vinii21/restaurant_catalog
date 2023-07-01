import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ForkComponent } from './components/fork/fork.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { RandomComponent } from './components/random/random.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { SvgmenuComponent } from './components/svgmenu/svgmenu.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ModalPromotionsComponent } from './components/modal-promotions/modal-promotions.component';
import { CreditsComponent } from './views/credits/credits.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ForkComponent,
    PromotionComponent,
    RandomComponent,
    HeaderComponent,
    CardComponent,
    SvgmenuComponent,
    CategoriesComponent,
    ModalPromotionsComponent,
    CreditsComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
