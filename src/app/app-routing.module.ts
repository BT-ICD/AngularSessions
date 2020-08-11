import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  {path:'home', component:HomeComponent},
  {
    path:'products',
    loadChildren:()=>
      import('./productlazyload/productlazyload.module')
      .then(m=>m.ProductlazyloadModule)
  },
  {
    path:'reactiveforms',
    loadChildren:()=>
      import('./reactive-forms-demo/reactive-forms-demo.module')
      .then(m=>m.ReactiveFormsDemoModule)
  },
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
