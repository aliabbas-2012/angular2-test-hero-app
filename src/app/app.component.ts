import { Component,OnInit } from '@angular/core';
import {Hero} from './hero/hero';
import {HeroService} from './hero/hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})


export class AppComponent implements OnInit {
   title = 'Tour of Heroes';

   hero: Hero = {
    id: 1,
    name: 'Windstorm',
    age: 45
  }

  constructor(private _heroService: HeroService) { 

  }

  selectedHero: Hero;
  heroes: Hero[];
 
  ngOnInit(): void {
    //geting heros on init
    // this.heroes = this._heroService.getHeroes()
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    //call back
    this._heroService.getHeroes().catch((err) => {
      console.log('I get called:', err.message); // I get called: 'Something awful happened'
    });
  }

  onSelect(hero: Hero):void{
    console.log(hero)
    this.selectedHero = hero;
  }

  unSelect():void{
    this.selectedHero = null
  }
  
}
