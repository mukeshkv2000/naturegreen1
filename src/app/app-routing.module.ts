import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
const routes: Routes = [


  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  { path: '**',   component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
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
  DeluxeSuiteComponent
]