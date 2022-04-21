import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from '@circlon/angular-tree-component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TreeComponentComponent } from './tree-component/tree-component.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    NotfoundComponent,
    TreeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TreeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
