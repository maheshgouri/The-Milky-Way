import { Injectable } from '@angular/core';
import { PLANETS } from './mock-planets';
import {Planet} from "./planet";

@Injectable()
export class PlanetService {
  getPlanets(): promise<Planet[]> {
    return promise.resolve(PLANETS);
  }
}
