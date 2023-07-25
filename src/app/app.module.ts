import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

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
import { ModalMenuComponent } from './components/modal-menu/modal-menu.component';
import { ErrorSvgComponent } from './components/error-svg/error-svg.component';
import { UserComponent } from './views/user/user.component';
import { RegisterLoginComponent } from './views/register-login/register-login.component';
import { PanelUserComponent } from './views/panel-user/panel-user.component';
import { ColochounoSvgComponent } from './components/colochouno-svg/colochouno-svg.component';
import { ColochoCredistSvgComponent } from './components/colocho-credist-svg/colocho-credist-svg.component';
import { NavPagesComponent } from './components/nav-pages/nav-pages.component';
import { HomeSvgComponent } from './components/home-svg/home-svg.component';
import { UserSvgComponent } from './components/user-svg/user-svg.component';
import { InfoSvgComponent } from './components/info-svg/info-svg.component';
import { InstaSvgComponent } from './components/insta-svg/insta-svg.component';
import { EmailSvgComponent } from './components/email-svg/email-svg.component';
import { LinkedinSvgComponent } from './components/linkedin-svg/linkedin-svg.component';
import { RuedaSvgComponent } from './components/rueda-svg/rueda-svg.component';
import { WhatsappSvgComponent } from './components/whatsapp-svg/whatsapp-svg.component';


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
    NotFoundComponent,
    ModalMenuComponent,
    ErrorSvgComponent,
    UserComponent,
    RegisterLoginComponent,
    PanelUserComponent,
    ColochounoSvgComponent,
    ColochoCredistSvgComponent,
    NavPagesComponent,
    HomeSvgComponent,
    UserSvgComponent,
    InfoSvgComponent,
    InstaSvgComponent,
    EmailSvgComponent,
    LinkedinSvgComponent,
    RuedaSvgComponent,
    WhatsappSvgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
