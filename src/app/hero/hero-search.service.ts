import {Injectable} from "@angular/core"
import {Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Hero} from './hero';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroSearchService {

  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getHeroes(name: string): Promise<Hero[]> {
     return this.http.get(`${this.heroesUrl}?name=${name}`)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

   searchOb(term: string): Observable<Hero[]> {
      return this.http
                .get(`${this.heroesUrl}?name=${term}`)
                .map(response => response.json().data as Hero[]);
  }
}