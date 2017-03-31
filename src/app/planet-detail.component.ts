import { Component, Input } from '@angular/core';
import { Planet } from './planet';

@Component({
  selector: 'planet-detail',
  template: `
<div *ngIf="planet">
<h2>I am {{planet.name}}!</h2>
<div><label>Orbit: </label>{{planet.orbit}}</div>
<div><label>Name: </label>{{planet.name}}</div>
<div><label>Name: </label><input [(ngModel)]="planet.name" placeholder="Planet Name"></div>
</div>
`
})

export class PlanetDetailComponent {
  @Input() planet: Planet;
}
