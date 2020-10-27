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
import { ContactComponent } from './contact/contact.component';
import { BlobComponent } from './blob/blob.component';
import { TheteamComponent } from './theteam/theteam.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PremiaethosComponent } from './premiaethos/premiaethos.component';
import { PrmiapartnerComponent } from './prmiapartner/prmiapartner.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'ThePremiaCulture', component: ThestudycultureComponent},
  {path: 'ThePremiaStory', component: ThepremianstoryComponent},
  {path: 'ThePremiaEdge', component: ThepremianedgeComponent},
  {path: 'JoinThePremiaPride', component: AdmissionsComponent},
  {path: 'HowToApply', component: ApplyComponent},
  {path: 'CatchUpOverCoffee', component: ContactComponent},
  {path: 'ThePremiaCorner', component: BlobComponent},
  {path: 'ThePremiaLeague', component: TheteamComponent},
  {path: 'Curriculum', component: CurriculumComponent},
  {path: 'PremiaEthos', component: PremiaethosComponent},
  {path: 'PremiaPartner', component: PrmiapartnerComponent},
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
    EngComponent,
    ContactComponent,
    BlobComponent,
    TheteamComponent,
    CurriculumComponent,
    PremiaethosComponent,
    PrmiapartnerComponent
],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled'}),
    BrowserModule,
    NgbModule,
    SlickCarouselModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}