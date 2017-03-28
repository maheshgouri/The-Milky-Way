import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'

export class Planet {
  orbit: number
  name: string
}

@Component({
  selector: 'my-app',
  template: `
<h1>{{heading}}</h1>

<h2>Our Planets</h2>
<ul class="heroes">
<li *ngFor="let planet of planets" [class.selected]="planet === selectedPlanet" (click)="onSelect(planet)">
<span class="badge">
<label>{{planet.orbit}}:</label></span> {{planet.name}}
</li>
</ul>

<div *ngIf="selectedPlanet">
<h2>I am {{selectedPlanet.name}}!</h2>
<div><label>Orbit: </label>{{selectedPlanet.orbit}}</div>
<div>
<label>Name: </label>{{selectedPlanet.name}}
</div>
</div>
`
})
export class AppComponent  {
  heading = 'The Milky Way';
  planets = PLANETS;
// null or undefined
  selectedPlanet: Planet;

  onSelect(planet: Planet): void{
    this.selectedPlanet = planet;
    console.log(planet);
  }
}
const PLANETS: Planet[] = [
  {orbit: 1, name: 'Mercury'},
  {orbit: 2, name: 'Venus'},
  {orbit: 3, name: 'Earth'},
  {orbit: 4, name: 'Mars'},
  {orbit: 5, name: 'Jupiter'},
  {orbit: 6, name: 'Saturn'},
  {orbit: 7, name: 'Uranus'},
  {orbit: 8, name: 'Neptune'},
  {orbit: 9, name: 'Pluto'},

]

