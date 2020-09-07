import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

// Third Party Modules
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

// App Modules
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FullnameModule} from './full-name-demo/fullname.module';
import { AppNavBarComponent } from './partial/app-nav-bar.component';
import { ViewChildDemoModule } from './view-child-demo/view-child-demo.module';
import { StudentResultModule } from './student-result/student-result.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    FullnameModule,
    ViewChildDemoModule,
    StudentResultModule,
    AppRoutingModule
    
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
