import { NgModule } from '@angular/core';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Routes, RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContactComponent } from './contact/contact.component';
import { Title, Meta } from '../../node_modules/@angular/platform-browser';


const routes: Routes = [
  {
    path:'',
    component: LandingpageComponent,
    data:{
      title:"Home",
      metaDescription: 'Clock time 1'
    }
  },                  
  {
    path:'contact',
    component: ContactComponent,
    data:{
      title:"Contact",
      metaDescription: 'Clock time 2'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(  ){  }
}
