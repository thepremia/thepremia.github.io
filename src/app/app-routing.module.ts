import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';





const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/Contactus', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    HomeComponent,
],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    SlickCarouselModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
