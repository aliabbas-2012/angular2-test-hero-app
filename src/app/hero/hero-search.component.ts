import { Component,Input,OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroSearchService} from './hero-search.service';
import { Router }   from '@angular/router';

@Component({
   selector: 'hero-search',
   templateUrl: './hero-search.component.html',
   styleUrls:['./hero-search.component.css'],
   providers: [HeroSearchService]
})


export class HeroSearchComponent implements OnInit {

    heroes: Hero[];
    constructor(private _heroSearchService: HeroSearchService,private router: Router) { 
     
    }
    ngOnInit(): void {
        console.log("--search--")
    }

    search(name:string):void {
        this._heroSearchService.getHeroes(name).then(heroes => this.heroes = heroes);
        
        //call back
        this._heroSearchService.getHeroes(name).catch((err) => {
            console.log('I get called:', err.message); // I get called: 'Something awful happened'
        });
    }

    gotoDetail(selectedHero: Hero): void {
        this.heroes = null
        this.router.navigate(['/detail', selectedHero.id]);
    }
}