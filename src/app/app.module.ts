import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodComponent } from './food/food.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { YogaComponent } from './yoga/yoga.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DealsComponent } from './deals/deals.component';
import { BlogsComponent } from './blogs/blogs.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { SeminarAndconfereenceComponent } from './seminar-andconfereence/seminar-andconfereence.component';
import { PoolVillaComponent } from './accomodation/pool-villa/pool-villa.component';
import { DeluxeCoupleComponent } from './accomodation/deluxe-couple/deluxe-couple.component';
import { DeluxeSuiteComponent } from './accomodation/deluxe-suite/deluxe-suite.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccomodationComponent,
    FoodComponent,
    PagenotfoundComponent,
    LifestyleComponent,
    YogaComponent,
    SigninComponent,
    SignupComponent,
    ContactusComponent,
    DealsComponent,
    BlogsComponent,
    WeddingsComponent,
    CelebrationComponent,
    SeminarAndconfereenceComponent,
    PoolVillaComponent,
    DeluxeCoupleComponent,
    DeluxeSuiteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
