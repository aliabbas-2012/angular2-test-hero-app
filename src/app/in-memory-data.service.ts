import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Mr. Nice',age: 45 },
      { id: 12, name: 'Narco' ,age: 25},
      { id: 13, name: 'Bombasto' ,age: 60},
      { id: 14, name: 'Celeritas' ,age: 41},
      { id: 15, name: 'Magneta' ,age: 32},
      { id: 16, name: 'RubberMan' ,age: 36},
      { id: 17, name: 'Dynama' ,age: 39},
      { id: 18, name: 'Dr IQ' ,age: 41},
      { id: 19, name: 'Magma' ,age: 34},
      { id: 20, name: 'Tornado',age: 29 }
    ];
    return {heroes};
  }
}