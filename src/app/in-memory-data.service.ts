import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Midoriya Izuku' },
      { id: 12, name: 'Katsuki Bakugo' },
      { id: 13, name: 'Todoroki Shoto' },
      { id: 14, name: 'Uraraka Ochako' },
      { id: 15, name: 'Kaminari Denki' },
      { id: 16, name: 'Kirishima Eijiro' },
      { id: 17, name: 'Lida Tenya' },
      { id: 18, name: 'Jirou Kyouka' },
      { id: 19, name: 'Tokoyami Fumikage' },
      { id: 20, name: 'Endeavor' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}