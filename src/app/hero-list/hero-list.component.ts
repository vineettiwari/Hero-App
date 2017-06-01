import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';


@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {
    title: string = 'Tour Of Heroes';
    heroes: Hero[] = null;
    temp: Hero = null;
    selectedHero: Hero = null;

    constructor(private _heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    selectHero(index: number) {
        this.selectedHero = this.heroes[index];
        console.log("You selected: " + this.selectedHero.name);
    }
}
