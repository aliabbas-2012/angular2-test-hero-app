import { Component,Input,OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import { Router }   from '@angular/router';

@Component({
   selector: 'my-heroes',
   templateUrl: './heroes.component.html',
   styleUrls:['./heroes.component.css'],
   providers: [HeroService]
})

export class HeroesComponent implements OnInit {

    
  constructor(private _heroService: HeroService,private router: Router) { 
     
  }

  selectedHero: Hero;
  heroes: Hero[];
  newHero: Hero ;
 
  ngOnInit(): void {
    
    this.newHero = new Hero()
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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  add(): void {
    let name = this.newHero.name.trim();
    if (!name) { return; }
    this._heroService.create(this.newHero)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
        this.newHero = new Hero()
      });
  }

  delete(hero: Hero): void {
    this._heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
}