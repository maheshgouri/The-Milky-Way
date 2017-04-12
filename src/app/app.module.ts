import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { PlanetsComponent } from './planets.component';
import { PlanetDetailComponent } from  './planet-detail.component';

@NgModule({
  imports:      [
    BrowserModule
    , FormsModule
    , RouterModule.forRoot([
      {
        path: 'planets',
        component: PlanetsComponent
      }
    ])],
  declarations: [ AppComponent, PlanetDetailComponent, PlanetsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
