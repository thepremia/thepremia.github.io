import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ThestudycultureComponent } from './thestudyculture/thestudyculture.component';
import { ThepremianstoryComponent } from './thepremianstory/thepremianstory.component';
import { ThepremianedgeComponent } from './thepremianedge/thepremianedge.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ApplyComponent } from './apply/apply.component';
import { EngComponent } from './eng/eng.component';






const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'TheStudyCulture', component: ThestudycultureComponent},
  {path: 'ThePremianStory', component: ThepremianstoryComponent},
  {path: 'ThePremianEdge', component: ThepremianedgeComponent},
  {path: 'Admissions', component: AdmissionsComponent},
  {path: 'Apply', component: ApplyComponent},
  {path: 'Eng', component: EngComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    HomeComponent,
    ThestudycultureComponent,
    ThepremianstoryComponent,
    ThepremianedgeComponent,
    AdmissionsComponent,
    ApplyComponent,
    EngComponent
],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled'}),
    BrowserModule,
    NgbModule,
    SlickCarouselModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
