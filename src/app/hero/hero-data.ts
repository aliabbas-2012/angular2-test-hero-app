import { InMemoryDbService } from 'angular-in-memory-web-api';
export class HeroData implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: 'Windstorm',age: 21, },
      { id: 2, name: 'Bombasto',age: 22, },
      { id: 3, name: 'Magneta',age: 27, },
      { id: 4, name: 'Tornado',age: 25, }
    ];
    return {heroes};
  }
}