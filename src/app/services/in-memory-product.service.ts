import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryProductService implements InMemoryDbService {
  createDb() {
    let products = [
      {id: 1, name: 'Snickers', cost: 1.25},
      {id: 2, name: 'Twix', cost: 1.25},
      {id: 3, name: 'Reese\'s', cost: 1.50},
      {id: 4, name: 'Milky Way', cost: 1.25},
      {id: 5, name: 'Three Musketeers', cost: 1.00}
    ];
    return { products };
  }
}
