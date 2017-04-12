import {Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>{{heading}}</h1>
<a routerLink="/planets">Planets</a>
<router-outlet></router-outlet>
`
})

export class AppComponent{
  heading = 'The Milky Way';
}
