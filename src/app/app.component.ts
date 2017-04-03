import { Component, OnInit } from '@angular/core';
import { Planet } from './planet';
import { PlanetService } from './planet-service';


@Component({
  selector: 'my-app',
  template: `
<h1>{{heading}}</h1>
<h2>Our Planets</h2>
<ul class="heroes">
<li *ngFor="let planet of _planets" [class.selected]="planet === selectedPlanet" (click)="onSelect(planet)">
<span class="badge">
<label>{{planet.orbit}}:</label></span> {{planet.name}}
</li>
</ul>

<planet-detail [planet]="selectedPlanet"></planet-detail>
`,
  providers: [ PlanetService ]
})

export class AppComponent implements OnInit{
  private heading = 'The Milky Way';
  private _planets:Planet[];
  private selectedPlanet: Planet;

  constructor(private planetService: PlanetService){}

  getPlanets(): void  {
    this.planetService.getPlanets().then((planets) => {
      this._planets = planets;
    });
  }

  ngOnInit(): void{
    this.getPlanets()
  }

  onSelect(planet: Planet): void{
    this.selectedPlanet = planet;
  }

}
